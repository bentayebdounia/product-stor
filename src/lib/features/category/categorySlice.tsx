import { createSlice } from "@reduxjs/toolkit";
import { fetchAllCategory } from "./categoryThunks";
import { Product } from "@/lib/interfaces/product";


interface ProductState {
  category?: [];
  product?: Product;
  isLoading: boolean;
  isError?: any;
}

const initialState: ProductState = {
  category: undefined,
  product: undefined,
  isLoading: false,
  isError: null,
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllCategory.pending, (state) => {
        state.isLoading = true;
        state.category = undefined;
        state.isError = undefined;
        
      })
      .addCase(fetchAllCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.category = action.payload;
        
      })
      .addCase(fetchAllCategory.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = payload;
      })
      
  }})

export default categorySlice.reducer;
