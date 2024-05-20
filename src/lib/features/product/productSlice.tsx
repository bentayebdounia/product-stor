import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { createNewProduct, deleteProduct, fetchAllProduct, fetchAllProductById, updateProduct } from "./productThunks";
import { Product } from "@/lib/interfaces/product";

interface ProductState {
  product?: Product[];
  currentProduct?: Product;
  isLoading: boolean;
  isError?: any;
  searchValue: string;
}

const initialState: ProductState = {
  product: undefined,
  currentProduct: undefined,
  isLoading: false,
  isError: null,
  searchValue: "",
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getConnectionCategoryById: (state, action: PayloadAction<Product>) => {
      state.currentProduct = action.payload;
    },
    postNewConnection: (state, action: PayloadAction<Product>) => {
      state.currentProduct = action.payload;
    },
    updateConnectionSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
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
      })
      .addCase(createNewProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createNewProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        return state;
      })
      .addCase(createNewProduct.rejected, (state, { payload }) => {
        state.isLoading = false;
      })
      .addCase(updateProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        return state;
      })
      .addCase(updateProduct.rejected, (state, { payload }) => {
        state.isLoading = false;
        return state;
      })
      .addCase(deleteProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        return state;
      })
      .addCase(deleteProduct.rejected, (state, { payload }) => {
        state.isLoading = false;
      });
  },
});

export default productSlice.reducer;
