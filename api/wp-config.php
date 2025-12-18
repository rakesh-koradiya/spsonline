<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'spsonline' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '^@8+$0l|R-fY=nf&B6nfL}GayN[l!VTqC=61d=@gbVCe.o(.$e4te7T*=QqjKdL(' );
define( 'SECURE_AUTH_KEY',  'Phl.pcxf<9RjJ0a/##n_aY%Hs3v~p;6~koYH?<&=7<P}Rh9xva;FyP~1pbEBv-oW' );
define( 'LOGGED_IN_KEY',    '_#`aDQro2QX8|`q>pk8p.[6VWGYCrC.3&n/x_16{l36_!;{q3n+ ?3[xn;+~gl}]' );
define( 'NONCE_KEY',        'N45sPCL<?b.zU@g_j|~/`]#s2,zIT|1]I;+hn+Y@FDg4#03@w-N#.%zH6B!e6^p*' );
define( 'AUTH_SALT',        '2w}}.[1 U:]8vsV<Pd:93fmwhkch,0=;ib:SSd]G[$%V$|ztGU}h6<3X&F<-3?Wr' );
define( 'SECURE_AUTH_SALT', '#mfM%l7pT0{;/8:y^LML{K*3B9F,.]]XKFS:iP)X.c|H/}bx-bkDcJ8CP@gh/Kx^' );
define( 'LOGGED_IN_SALT',   '^3X()y.3H>]fPMu~Yqk:wEG@I,MKDB|5ow!!EA=xJpcO[ti]B[|fu*:/}_?OY 9?' );
define( 'NONCE_SALT',       'Pzp1bIZN/Z`EH^_y=6]5FiZ&dOx)0FveHSRmi35M.iI)]/.A+C3jves(Y4O@+Z.V' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 *
 * At the installation time, database tables are created with the specified prefix.
 * Changing this value after WordPress is installed will make your site think
 * it has not been installed.
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/#table-prefix
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
 */
define('WP_DEBUG', true);                 // Enable debugging
define('WP_DEBUG_LOG', true);             // Write errors to wp-content/debug.log
define('WP_DEBUG_DISPLAY', false);        // Hide errors from frontend
define('SCRIPT_DEBUG', true);             // Load unminified scripts

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
