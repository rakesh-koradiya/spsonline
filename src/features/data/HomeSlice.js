import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


export const fetchHomeData = createAsyncThunk(
    'data/fetchHomeData',
    async () => {
        const res = await fetch('http://localhost/spsonline/api/wp-json/my/v1/page/home');
        return res.json();
    }
);


const homeSlice = createSlice({
    name: 'home',
    initialState:  {
        home:[],
        status: 'idle',
        error:null,
    },
    reducers:{},
    extraReducers: (builder) => {
        builder
        .addCase(fetchHomeData.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchHomeData.fulfilled, (state, action) => {
             state.status = 'succeeded';
              state.home = action.payload;
        })
        .addCase(fetchHomeData.rejected, (state, action) => {
            state.status = 'failed';
            state.home = action.error.message;
        })
    }
})

export default homeSlice.reducer;