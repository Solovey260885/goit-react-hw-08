import { createSlice, isAnyOf, PayloadAction } from "@reduxjs/toolkit";

import { logIn, logOut, refreshUser, register } from "./operations";

export interface AuthUser {
  name: null | string;
  email: null | string;
}

export interface AuthState {
  user: AuthUser;
  token: null | string;
  isLoggedIn: boolean;
  isRefreshing: boolean;
  isError: boolean;
  isLoading: boolean;
}

const initialState: AuthState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isError: false,
  isLoading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        register.fulfilled,
        (state, action: PayloadAction<AuthState>) => {
          state.user = action.payload.user;
          state.token = action.payload.token;
          state.isLoggedIn = true;
          state.isLoading = false;
        }
      )
      .addCase(logIn.fulfilled, (state, action: PayloadAction<AuthState>) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(logOut.fulfilled, () => {
        return initialState;
      })
      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(
        refreshUser.fulfilled,
        (state, action: PayloadAction<AuthUser>) => {
          state.user = action.payload;
          state.isRefreshing = false;
          state.isLoggedIn = true;
        }
      )
      .addMatcher(isAnyOf(register.pending, logIn.pending), (state) => {
        state.isLoading = true;
      })
      .addMatcher(
        isAnyOf(register.rejected, logIn.rejected),
        (state, action) => {
          state.isLoading = false;
          state.isError = true;
        }
      );
  },
});

export default authSlice.reducer;
