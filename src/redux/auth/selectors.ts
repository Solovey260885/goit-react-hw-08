import { RootState } from "../store";
import { AuthUser } from "./slice";

export const selectIsLoggedIn = (state: RootState): boolean =>
  state.auth.isLoggedIn;
export const selectUser = (state: RootState): AuthUser => state.auth.user;
export const selectIsRefreshing = (state: RootState): boolean =>
  state.auth.isRefreshing;
