import { configureStore } from "@reduxjs/toolkit";

import contactsReducer from "../redux/contacts/slice";
import filtersReducer from "../redux/filters/slice";
import authReduser from "../redux/auth/slice";

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filtersReducer,
    auth: authReduser,
  },
});
