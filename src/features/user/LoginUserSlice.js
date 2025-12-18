import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const fetchLogedUser = createAsyncThunk(
    'user/fetchLogedUser', 
    async (credentials) => {        
        const res = await fetch('https://fakestoreapi.com/auth/login', {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(credentials)
        })

        return await res.json();
    }
)

const loginUserSlice = createSlice({
    name: 'loginUser',
    initialState:{
        user:[],
        token:null,
        isAuthenticated: false,
        status: 'idle',
        loginStatus: 'idle',
        error: null,
    },
    reducers:{},
    extraReducers: (builder)=> {
        builder

        .addCase(fetchLogedUser.pending, (state) => {
            state.status = 'loading'
        })

        .addCase(fetchLogedUser.fulfilled, (state, action)=> {
            state.status = 'fulfiled';
            state.token = action.payload.token;
            state.isAuthenticated = true;
        })

        .addCase(fetchLogedUser.rejected, (state, action)=> {
            state.status = 'failed';
            state.error = action.payload;
        })
    }
})


export default loginUserSlice.reducer