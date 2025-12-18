<?php
/**
 * mu-plugin: Clean Page API + Robust Debugging + Manual clear endpoint
 * Save as: wp-content/mu-plugins/api.php
 *
 * Notes:
 * - To disable caching during development, uncomment the define below:
 *   define('MY_API_BYPASS_CACHE', true);
 */

if (!defined('ABSPATH')) exit;

// Uncomment during dev to bypass transient caching
define('MY_API_BYPASS_CACHE', true);

// ---------- Debug: Plugin Loaded ----------
error_log('[MU-PLUGIN] api.php loaded at ' . current_time('mysql') . ' PID:' . getmypid());

// ---------- Helper: Convert attachments recursively ----------
function my_convert_attachments_recursive($value) {
    if (is_numeric($value)) {
        $id = (int) $value;
        $post = get_post($id);
        if ($post && $post->post_type === 'attachment') {
            return [
                'id' => $id,
                'url' => wp_get_attachment_url($id),
                'sizes' => [
                    'thumbnail' => wp_get_attachment_image_url($id, 'thumbnail'),
                    'medium'    => wp_get_attachment_image_url($id, 'medium'),
                    'large'     => wp_get_attachment_image_url($id, 'large'),
                    'full'      => wp_get_attachment_image_url($id, 'full'),
                ]
            ];
        }
        return $value;
    }

    if (is_array($value)) {
        foreach ($value as $k => $v) $value[$k] = my_convert_attachments_recursive($v);
        return $value;
    }

    if (is_object($value)) {
        return (object) my_convert_attachments_recursive((array) $value);
    }

    return $value;
}

// ---------- Build page payload ----------
function my_build_page_payload($post_id) {
    $post = get_post($post_id);
    if (!$post) return null;

    $payload = [
        'id'      => (int) $post->ID,
        'slug'    => $post->post_name,
        'title'   => apply_filters('the_title', $post->post_title),
        'content' => apply_filters('the_content', $post->post_content),
        'excerpt' => get_the_excerpt($post),
    ];

    // ACF fields
    if (function_exists('get_fields')) {
        $acf = get_fields($post_id) ?: [];
        $payload['acf'] = my_convert_attachments_recursive($acf);
    } else {
        $payload['acf'] = new stdClass();
    }

    // Featured image
    $thumb_id = get_post_thumbnail_id($post_id);
    if ($thumb_id) {
        $payload['featured_image'] = [
            'id' => (int) $thumb_id,
            'url' => wp_get_attachment_url($thumb_id),
        ];
    }

    return $payload;
}

// ---------- Utility: delete single page transient ----------
function my_delete_page_transient_by_slug($slug) {
    $key = 'my_page_' . sanitize_key($slug);
    $deleted = delete_transient($key);
    error_log("[MU-PLUGIN] my_delete_page_transient_by_slug called for slug='{$slug}' returned: " . var_export($deleted, true));
    return $deleted;
}

// ---------- Register REST API routes ----------
add_action('rest_api_init', function() {

    // Debug route
    register_rest_route('my/v1', '/debug', [
        'methods'  => 'GET',
        'callback' => function() {
            return [
                'mu_plugin_loaded' => true,
                'acf_active'       => function_exists('get_fields'),
                'routes_count'     => count(rest_get_server()->get_routes()),
                'bypass_cache'     => defined('MY_API_BYPASS_CACHE') && MY_API_BYPASS_CACHE === true,
            ];
        },
        'permission_callback' => '__return_true',
    ]);

    // Manual clear endpoint (POST) - admin-only (capability)
    register_rest_route('my/v1', '/clear/(?P<slug>[a-zA-Z0-9-_\/]+)', [
        'methods' => 'POST',
        'callback' => function($request) {
            if (!is_user_logged_in() || !current_user_can('edit_pages')) {
                return new WP_Error('forbidden', 'You must be logged in with edit_pages capability', ['status'=>403]);
            }
            $slug = $request['slug'] ?? '';
            if (!$slug) return new WP_Error('no_slug', 'No slug provided', ['status' => 400]);
            $deleted = my_delete_page_transient_by_slug($slug);
            return rest_ensure_response(['slug'=>$slug, 'deleted' => $deleted]);
        },
        'permission_callback' => function() { return true; } // capability checked in callback
    ]);

    // Page route callback
    $callback = function($request) {
        $slug = $request['slug'] ?? '';
        if (!$slug) return new WP_Error('no_slug', 'Slug missing', ['status' => 400]);

        // Build transient key
        $transient_key = 'my_page_' . sanitize_key($slug);

        // Bypass cache during dev?
        if (defined('MY_API_BYPASS_CACHE') && MY_API_BYPASS_CACHE === true) {
            error_log("[MU-PLUGIN] BYPASS cache for slug: {$slug}");
            $page = get_page_by_path($slug, OBJECT, 'page');
            if (!$page) return new WP_Error('no_page', "Page '{$slug}' not found", ['status' => 404]);
            $payload = my_build_page_payload($page->ID);
            return rest_ensure_response($payload);
        }

        // normal flow: try transient
        $cached = get_transient($transient_key);
        if ($cached !== false) {
            error_log("[MU-PLUGIN] Serving cached payload for slug: {$slug}");
            return rest_ensure_response($cached);
        }

        // fetch fresh
        $page = get_page_by_path($slug, OBJECT, 'page');
        if (!$page) return new WP_Error('no_page', "Page '{$slug}' not found", ['status' => 404]);

        $payload = my_build_page_payload($page->ID);

        // store transient
        set_transient($transient_key, $payload, 60);
        error_log("[MU-PLUGIN] Cached payload for slug: {$slug}");
        return rest_ensure_response($payload);
    };

    // /my/v1/page/<slug>
    register_rest_route('my/v1', '/page/(?P<slug>[a-zA-Z0-9-_\/]+)', [
        'methods'  => 'GET',
        'callback' => $callback,
        'permission_callback' => '__return_true',
    ]);

    // Shortcut /my/v1/<slug>
    register_rest_route('my/v1', '/(?P<slug>[a-zA-Z0-9-_]+)', [
        'methods'  => 'GET',
        'callback' => $callback,
        'permission_callback' => '__return_true',
    ]);

}, 10);

// ---------- Verbose cache-clearing hooks ----------

// save_post — catches WP Admin / Gutenberg / REST changes
add_action('save_post', function($post_id, $post, $update) {
    error_log("[MU-PLUGIN] save_post fired for ID: {$post_id} (type: {$post->post_type}) update:" . var_export($update, true));
    // ignore autosaves and revisions
    if (wp_is_post_autosave($post_id) || wp_is_post_revision($post_id)) {
        error_log("[MU-PLUGIN] Ignoring autosave/revision for ID: {$post_id}");
        return;
    }
    if ($post->post_type !== 'page') {
        error_log("[MU-PLUGIN] save_post: not a page (ID: {$post_id})");
        return;
    }
    // if the post is not published, still clear transient (to be safe)
    $slug = get_post_field('post_name', $post_id);
    if ($slug) {
        my_delete_page_transient_by_slug($slug);
        error_log("[MU-PLUGIN] save_post cleared transient for slug: {$slug}");
    }
}, 10, 3);

// edit_post — also fire for edits (extra safety)
add_action('edit_post', function($post_id) {
    error_log("[MU-PLUGIN] edit_post fired for ID: {$post_id}");
    $post = get_post($post_id);
    if ($post && $post->post_type === 'page') {
        $slug = $post->post_name;
        my_delete_page_transient_by_slug($slug);
        error_log("[MU-PLUGIN] edit_post cleared transient for slug: {$slug}");
    }
}, 10);

// transition_post_status — catches status changes (draft -> publish etc.)
add_action('transition_post_status', function($new_status, $old_status, $post) {
    error_log("[MU-PLUGIN] transition_post_status: {$old_status} -> {$new_status} for ID: {$post->ID}, type: {$post->post_type}");
    if ($post->post_type === 'page') {
        $slug = $post->post_name;
        my_delete_page_transient_by_slug($slug);
        error_log("[MU-PLUGIN] transition_post_status cleared transient for slug: {$slug}");
    }
}, 10, 3);

// ACF save hook
add_action('acf/save_post', function($post_id) {
    error_log("[MU-PLUGIN] acf/save_post fired for post_id: " . var_export($post_id, true));
    if ($post_id === 'options') {
        global $wpdb;
        $wpdb->query("DELETE FROM {$wpdb->options} WHERE option_name LIKE 'my_page_%'");
        error_log('[MU-PLUGIN] acf/save_post: cleared all page transients due to options save');
        return;
    }
    $post_id_int = intval($post_id);
    if ($post_id_int && get_post_type($post_id_int) === 'page') {
        my_delete_page_transient_by_slug(get_post_field('post_name', $post_id_int));
        error_log("[MU-PLUGIN] acf/save_post cleared transient for page ID: {$post_id_int}");
    }
}, 20);