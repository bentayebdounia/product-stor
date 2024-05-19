import { createSlice } from "@reduxjs/toolkit";
import { logout, userLogin } from "./authenticationThunks";
import TokenService from "./tokenService";

const initialState = {
  loading: false,
  access_token:
    TokenService.getToken() != null
      ? TokenService.getToken()!.access_token
      : "",
  error: "",
  isAuth: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(userLogin.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(userLogin.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.error = payload.message;
        state.isAuth = true;
        TokenService.updateLocalAccessToken({
          access_token: payload.access_token,
          refresh_token: payload.refresh_token,
        });
        state.access_token = TokenService.getToken()!.access_token;
        
      })
      .addCase(userLogin.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = `${payload}`;
      })
     
  },
});
export default authSlice.reducer;
