import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import {
  createNewProduct,
  deleteProduct,
  fetchAllProduct,
  fetchAllProductById,
  fetchProductsCategory,
  updateProduct,
} from "./productThunks";
import { Product } from "@/lib/interfaces/product";

interface ProductState {
  product?: Product[];
  currentProduct?: Product;
  updateProductSuccess?: any;
  deleteProductSuccess?: any;
  createProductSuccess?: any;
  isLoading: boolean;
  isError?: any;
  searchValue: string;
}

const initialState: ProductState = {
  product: undefined,
  currentProduct: undefined,
  updateProductSuccess: undefined,
  createProductSuccess: undefined,
  deleteProductSuccess: undefined,
  isLoading: false,
  isError: null,
  searchValue: "",
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getCategoryById: (state, action: PayloadAction<Product>) => {
      state.currentProduct = action.payload;
    },
    postNewProduct: (state, action: PayloadAction<Product>) => {
      state.currentProduct = action.payload;
    },
    updateProductSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProduct.pending, (state) => {
        state.isLoading = true;
        state.product = undefined;
        state.isError = undefined;
        state.createProductSuccess = undefined;
        state.updateProductSuccess = undefined;
        state.deleteProductSuccess = undefined;
      })
      .addCase(fetchAllProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.product = action.payload;
        state.createProductSuccess = undefined;
        state.updateProductSuccess = undefined;
        state.deleteProductSuccess = undefined;
      })
      .addCase(fetchAllProduct.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = payload;
      })
      .addCase(fetchAllProductById.pending, (state) => {
        state.isLoading = true;
        state.isError = undefined;
        state.updateProductSuccess = undefined;
      })
      .addCase(fetchAllProductById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.currentProduct = action.payload;
      })
      .addCase(fetchAllProductById.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = payload;
      })
      .addCase(createNewProduct.pending, (state) => {
        state.isLoading = true;
        state.createProductSuccess = undefined;
        state.updateProductSuccess = undefined;
      })
      .addCase(createNewProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.createProductSuccess = true;
        return state;
      })
      .addCase(createNewProduct.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.createProductSuccess = false;
      })
      .addCase(updateProduct.pending, (state) => {
        state.isLoading = true;
        state.updateProductSuccess = undefined;
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.updateProductSuccess = true;

        return state;
      })
      .addCase(updateProduct.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.updateProductSuccess = false;

        return state;
      })
      .addCase(deleteProduct.pending, (state) => {
        state.isLoading = true;
        state.deleteProductSuccess = undefined;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.deleteProductSuccess = true;

        return state;
      })
      .addCase(deleteProduct.rejected, (state, { payload }) => {
        state.isLoading = false;
      })
      .addCase(fetchProductsCategory.pending, (state) => {
        state.isLoading = true;
        state.product = undefined;
        state.isError = undefined;
        
      })
      .addCase(fetchProductsCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.product = action.payload;
        
      })
      .addCase(fetchProductsCategory.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = payload;
      });
  },
});
export const { updateProductSearchValue } = productSlice.actions;
export default productSlice.reducer;
