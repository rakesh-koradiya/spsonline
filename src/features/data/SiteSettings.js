import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchSiteData = createAsyncThunk(
    'data/fetchSiteData',
     async () => {
        const res = await fetch('http://localhost/spsonline/api/wp-json/acf/v3/options/options');
        return res.json();
    }
)

const siteSettingSlice = createSlice({
    name:'site_settings',
    initialState: {
        site_settings: null,
        status: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchSiteData.pending, (state) => {
            state.status = 'loading';
            state.error = null;
        })
        .addCase(fetchSiteData.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.site_settings = action.payload;
        })
        .addCase(fetchSiteData.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        })
    }
})


export default siteSettingSlice.reducer;