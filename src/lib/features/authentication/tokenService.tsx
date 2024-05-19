import Cookie from "js-cookie";
import { jwtDecode } from "jwt-decode";

const getLocalAccessToken = () => {
  try {
    const access_token = Cookie.get("access_token");
    return access_token;
  } catch (error) {
    return null;
  }
};

const getToken = () => {
  try {
    const access_token = Cookie.get("access_token");
    const refresh_token = Cookie.get("refresh_token");

    if (access_token && refresh_token) {
      const token = {
        access_token,
        refresh_token,
      };

      return token;
    }

    return null;
  } catch (error) {
    return null;
  }
};

const updateLocalAccessToken = (token: any) => {
  try {
    const accessTokenCookieOptions = {
      httpOnly: false,
      // expires: access_tokenExpiry,
      path: "/",
      // sameSite: "Strict",
      secure: process.env.NEXT_PUBLIC_NODE_ENV === "production",
    };
    const refreshTokenCookieOptions = {
      httpOnly: false,
      // expires: refresh_tokenExpiry,
      path: "/",
      // sameSite: "Strict",
      secure: process.env.NEXT_PUBLIC_NODE_ENV === "production",
    };
    Cookie.set("access_token", token.access_token, accessTokenCookieOptions);
    Cookie.set("refresh_token", token.refresh_token, refreshTokenCookieOptions);
  } catch (error) {
    return false;
  }
};

const getExpiryDate = async (token: any) => {
  const decodedUser = jwtDecode(token?.refresh_token);
  return new Date(decodedUser.exp! * 1000);
};

const isAccessExpired = () => {
  try {
    const access_token = Cookie.get("access_token");
    if (access_token) {
      const decodedUser = jwtDecode(access_token);
      return new Date() > new Date(decodedUser.exp! * 1000);
    }

    return true;
  } catch (error) {
    return true;
  }
};
const removeCookies = () => {
  try {
    const accessToken = Cookie.get("access_token");
    if (accessToken) {
      Cookie.remove("access_token", { path: "/" });
      Cookie.remove("refresh_token", { path: "/" });
    }
  } catch (error) {
    return false;
  }
};
const TokenService = {
  getLocalAccessToken,
  updateLocalAccessToken,
  getExpiryDate,
  isAccessExpired,
  getToken,
  removeCookies,
};

export default TokenService;
