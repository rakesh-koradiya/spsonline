import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const fetchProducts = createAsyncThunk(
    'data/fetchProducts',
    async () => {
        const res = await fetch('https://dummyjson.com/products')
        return res.json();
    }
)

const shopSlice = createSlice({
    name: 'shop',
    initialState: {
        shop:{},
        status: 'idle',
        error: null
    },
    reducers:{},
    extraReducers: (builder) => {
        builder
        .addCase(fetchProducts.pending, (state) => {
            state.status = 'loading';
            state.error = null
        })

        .addCase(fetchProducts.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.shop = action.payload;
        })

        .addCase(fetchProducts.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        })
    }
})


export default shopSlice.reducer