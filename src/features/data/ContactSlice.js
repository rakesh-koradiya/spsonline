import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const fetchContactData = createAsyncThunk(
    'data/fetchContactData',
    async () => {
        const res = await fetch('http://localhost/spsonline/api/wp-json/my/v1/page/contact')
        return res.json();
    }
)


const contactSlice = createSlice({
    name: 'contact',
    initialState: {
        contact: {},
        status: 'idle',
        error: null
    },
    reducers:{},
    extraReducers: (builder) => {
        builder

        .addCase(fetchContactData.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchContactData.fulfilled, (state, action) => {
            state.status =  'succeed';
            state.contact = action.payload;
        })
        .addCase(fetchContactData.rejected, (state, action) => {
            state.status = 'failed';
            state.contact = action.error.message;
        } )
    }
})



export default contactSlice.reducer;