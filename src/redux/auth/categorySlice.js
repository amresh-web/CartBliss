import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: null,
    isLoading: false
}

export const fetchCategoryData = createAsyncThunk("fetchCategoryData", async () => {
    const res = await fetch(`${process.env.REACT_APP_BASE_URL}/category/getcategory`);
    return res.json();
});


const categorySlice = createSlice({
    name: 'category',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchCategoryData.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(fetchCategoryData.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        })
        builder.addCase(fetchCategoryData.rejected, (state, action) => {
            state.isError = true;
        })
    }
});

export default categorySlice.reducer;