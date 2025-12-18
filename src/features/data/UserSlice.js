import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const fetchUserData = createAsyncThunk( 
    'data/fetchUserData',
    async () => {
        const res = await fetch('https://fakestoreapi.com/users')
        return await res.json();
    }
)

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user:[],
        status: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchUserData.pending, (state) => {
            state.status = 'loading';
        })

        .addCase(fetchUserData.fulfilled, (state, action) => {
            state.status = 'fulfill';
            state.user = action.payload;
        })

        .addCase(fetchUserData.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        })
    }
})


export default userSlice.reducer