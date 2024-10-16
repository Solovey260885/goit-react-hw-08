import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { addContact, deleteContact, fetchContacts } from "./operations";
import { logOut } from "../auth/operations";

export interface Contact {
  id?: number | undefined;
  name: string;
  number: string;
}
``;

interface ContactsState {
  items: Contact[];
  loading: boolean;
  error: string | null;
}

const initialState: ContactsState = {
  items: [],
  loading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.items = [];
        state.loading = false;
        state.error = null;
      })
      .addCase(
        fetchContacts.fulfilled,
        (state, action: PayloadAction<Contact[]>) => {
          state.items = action.payload;
          state.loading = false;
        }
      )
      .addCase(fetchContacts.rejected, (state, action) => {
        state.error = action.error.message || "Fetch contacts failed";
        state.loading = false;
      })
      .addCase(addContact.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        addContact.fulfilled,
        (state, action: PayloadAction<Contact>) => {
          state.items.push(action.payload);
          state.loading = false;
        }
      )
      .addCase(addContact.rejected, (state, action) => {
        state.error = action.error.message || "Add contact failed";
        state.loading = false;
      })
      .addCase(deleteContact.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        deleteContact.fulfilled,
        (state, action: PayloadAction<{ id: number | string }>) => {
          state.items = state.items.filter(
            (contact) => contact.id !== action.payload.id
          );
          state.loading = false;
        }
      )
      .addCase(deleteContact.rejected, (state, action) => {
        state.error = action.error.message || "Delete contact failed";
        state.loading = false;
      });
  },
});

export default contactsSlice.reducer;
