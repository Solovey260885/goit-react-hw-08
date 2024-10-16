import { createSelector } from "@reduxjs/toolkit";
import { selectContacts } from "../contacts/selectors";
import { RootState } from "../store";
import { Contact } from "../contacts/slice";

export const selectFilter = (state: RootState): string => state.filters.name;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts: Contact[], contactsFilter: string) => {
    const normalizedFilter: string = contactsFilter.toLowerCase();
    return contacts.filter(
      (contact) =>
        contact.name.toLowerCase().includes(normalizedFilter) ||
        contact.number.toString().includes(normalizedFilter)
    );
  }
);
