import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import TokenService from "./tokenService";
import { fakeStoreApiUrls } from "../../../fakeStoreApiUrls";

export const userLogin = createAsyncThunk(
  "auth/login",
  async (loginData: any, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${fakeStoreApiUrls.LOGIN_URL}`,
        loginData
      );
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);
export const logout = createAsyncThunk(
  "auth/logout",
  async (_, thunkConfig) => {
    TokenService.removeCookies();
  }
);
