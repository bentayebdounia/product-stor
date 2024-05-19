import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "@/lib/store";
import { fakeStoreApiUrls } from "@/fakeStoreApiUrls";

export const fetchAllProduct = createAsyncThunk(
  "connectionCategories/getAll",
  async (_, thunkConfig) => {
    const state = thunkConfig.getState() as RootState;
    try {
      const response = await axios.get(
        `${fakeStoreApiUrls.PRODUCT_URL}/`,
        {
          headers: {
            Accept: `application/json`,
            Authorization: `Bearer ${state.authentication.access_token}`,
          },
        }
      );

      if (response.status == 200) {
        return response.data;
      } else {
        return thunkConfig.rejectWithValue("error");
      }
    } catch (error: any) {
      return thunkConfig.rejectWithValue(error.message);
    }
  
  }
);

export const fetchAllProductById = createAsyncThunk(
  "connectionCategories/getById",
  async (id: string, thunkConfig) => {
    const state = thunkConfig.getState() as RootState;
    try {
      const response = await axios.get(
        `${fakeStoreApiUrls.PRODUCT_URL}/${id}`,
        {
          headers: {
            Accept: `application/json`,
            Authorization: `Bearer ${state.authentication.access_token}`,
          },
        }
      );
      if (response.status == 200) {
        return response.data;
      } else {
        return thunkConfig.rejectWithValue("error");
      }
    } catch (error: any) {
      return thunkConfig.rejectWithValue(error.message);
    }
  }
);
