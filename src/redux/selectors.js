import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = (state) => state.contacts.items;
export const selectNameFilter = (state) => state.filter.name;
export const selectIsLoading = (state) => state.contacts.isLoading;
export const selectIsError = (state) => state.contacts.isError;

export const selectFilteredContactsMemo = createSelector(
  [selectContacts, selectNameFilter],
  (selectContacts, selectNameFilter) => {
    return selectContacts.filter((contact) =>
      contact.name.toLowerCase().includes(selectNameFilter.toLowerCase())
    );
  }
);
