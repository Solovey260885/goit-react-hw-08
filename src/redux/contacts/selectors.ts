import { RootState } from "../store";
import { Contact } from "./slice";

export const selectLoading = (state: RootState): boolean =>
  state.contacts.loading;
export const selectError = (state: RootState): string | null =>
  state.contacts.error;
export const selectContacts = (state: RootState): Contact[] =>
  state.contacts.items;
