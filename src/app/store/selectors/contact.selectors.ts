import { createSelector } from '@ngrx/store';
import { ContactState } from '../models/contact.state';
import { AppState } from '../app.state';

export const selectContactState = (state: AppState) => state.contactState;

export const selectContactList = createSelector(
  selectContactState,
  (state: ContactState) => state?.contactList
);

export const selectSelectedContact = createSelector(
  selectContactState,
  (state: ContactState) => state?.selectedContact
);
