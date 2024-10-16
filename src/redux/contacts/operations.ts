import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Contact } from "./slice";

export const fetchContacts = createAsyncThunk<
  Contact[],
  void,
  { rejectValue: string }
>("contacts/getAll", async (_, thunkAPI) => {
  try {
    const res = await axios.get("/contacts");
    return res.data as Contact[];
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      return thunkAPI.rejectWithValue(
        error.response.data.message || "Failed to fetch contacts"
      );
    } else {
      return thunkAPI.rejectWithValue("An unknown error occurred");
    }
  }
});

export const addContact = createAsyncThunk<
  Contact,
  Contact,
  { rejectValue: string }
>("contacts/addContact", async (newContact, thunkAPI) => {
  try {
    const res = await axios.post("/contacts", newContact);
    return res.data as Contact;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      return thunkAPI.rejectWithValue(
        error.response.data.message || "Failed to fetch contacts"
      );
    } else {
      return thunkAPI.rejectWithValue("An unknown error occurred");
    }
  }
});

export const deleteContact = createAsyncThunk<
  { id: number },
  number,
  { rejectValue: string }
>("contacts/deleteContact", async (contactId, thunkAPI) => {
  try {
    const res = await axios.delete(`/contacts/${contactId}`);
    return { id: contactId };
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      return thunkAPI.rejectWithValue(
        error.response.data.message || "Failed to fetch contacts"
      );
    } else {
      return thunkAPI.rejectWithValue("An unknown error occurred");
    }
  }
});
