import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { AuthState, AuthUser } from "./slice";
import { RootState } from "../store";

axios.defaults.baseURL = "https://connections-api.goit.global/";

const setAuthHeader = (token: string | null) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = ``;
};

export const register = createAsyncThunk<
  AuthState,
  { name: string; email: string; password: string },
  { rejectValue: string }
>("auth/register", async (credentials, thunkAPI) => {
  try {
    const { data } = await axios.post("users/signup", credentials);
    setAuthHeader(data.token);
    return data as AuthState;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      return thunkAPI.rejectWithValue(
        error.response.data.message || "Failed to fetch user"
      );
    } else {
      return thunkAPI.rejectWithValue("An unknown error occurred");
    }
  }
});

export const logIn = createAsyncThunk<
  AuthState,
  { email: string; password: string },
  { rejectValue: string }
>("auth/login", async (credentials, thunkAPI) => {
  try {
    const { data } = await axios.post("users/login", credentials);
    setAuthHeader(data.token);
    return data as AuthState;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      return thunkAPI.rejectWithValue(
        error.response.data.message || "Failed to fetch user"
      );
    } else {
      return thunkAPI.rejectWithValue("An unknown error occurred");
    }
  }
});

export const logOut = createAsyncThunk<
  void,
  void,
  { state: RootState; rejectValue: string }
>("auth/logout", async (_, thunkAPI) => {
  try {
    await axios.post("users/logOut");
    clearAuthHeader();
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      return thunkAPI.rejectWithValue(
        error.response.data.message || "Failed to fetch user"
      );
    } else {
      return thunkAPI.rejectWithValue("An unknown error occurred");
    }
  }
});

export const refreshUser = createAsyncThunk<
  AuthUser,
  void,
  { state: RootState }
>(
  "auth/refresh",
  async (_, thunkAPI) => {
    const reduxState = thunkAPI.getState();
    setAuthHeader(reduxState.auth.token);
    const response = await axios.get("/users/current");
    return response.data as AuthUser;
  },
  {
    condition: (_, thunkAPI) => {
      const reduxState = thunkAPI.getState();
      return reduxState.auth.token !== null;
    },
  }
);
