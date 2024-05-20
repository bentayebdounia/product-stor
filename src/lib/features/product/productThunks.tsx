import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "@/lib/store";
import { fakeStoreApiUrls } from "@/fakeStoreApiUrls";

export const fetchAllProduct = createAsyncThunk(
  "product/getAll",
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
  "product/getById",
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

export const createNewProduct = createAsyncThunk(
  "product/postNew",
  async (data: any, thunkConfig) => {
    const state = thunkConfig.getState() as RootState;
    try {
      const response = await axios.post(`${fakeStoreApiUrls.PRODUCT_URL}/`, data, {
        headers: {
          // Accept: `application/json`,
          Authorization: `Bearer ${state.authentication.access_token}`,
        },
      });
      if (response.status == 201) {
        return response.data;
      } else {
        return thunkConfig.rejectWithValue("error");
      }
    } catch (error: any) {
      return thunkConfig.rejectWithValue(error.message);
    }
  }
);
export const updateProduct = createAsyncThunk(
  "product/updateConnection",
  async (data: any, thunkConfig) => {
    const state = thunkConfig.getState() as RootState;
    try {
      const response = await axios.put(
        `${fakeStoreApiUrls.PRODUCT_URL}/${data.id}`,
        data.data,
        {
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            Accept: "application/json, text/plain, /",
            Authorization: `Bearer ${state.authentication.access_token}`,
          },
        }
      );
      await thunkConfig.dispatch(
        fetchAllProductById(data.id)
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

export const deleteProduct = createAsyncThunk(
  "product/deleteById",
  async (id: string, thunkConfig) => {
    const state = thunkConfig.getState() as RootState;
    try {
      const response = await axios.delete(
        `${fakeStoreApiUrls.PRODUCT_URL}/${id}`,
        {
          headers: {
            Accept: `application/json`,
            Authorization: `Bearer ${state.authentication.access_token}`,
          },
        }
      );
      await thunkConfig.dispatch(
        fetchAllProduct()
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
