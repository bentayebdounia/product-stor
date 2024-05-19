  
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import {
  fetchAllProduct,
  fetchAllProductById,
} from "./productThunks";
import { Product } from "@/lib/interfaces/product";

interface ProductState {
  product?: Product[];
  currentProduct?: Product;
  isLoading: boolean;
  isError?: any;
}

const initialState: ProductState = {
  product: undefined,
  currentProduct: undefined,
  isLoading: false,
  isError: null,
};

const productSlice = createSlice({
  name: "connectionCategory",
  initialState,
  reducers: {
    getConnectionCategoryById: (
      state,
      action: PayloadAction<Product>
    ) => {
      state.currentProduct = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAllProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.product = action.payload;
      })
      .addCase(fetchAllProduct.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = payload;
        })
      .addCase(fetchAllProductById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAllProductById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.currentProduct = action.payload;
      })
      .addCase(fetchAllProductById.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = payload;
        });

  },
});

export default productSlice.reducer;
