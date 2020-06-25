import { createAction, props } from '@ngrx/store';
import { Contact } from '../models/contact.model';

export enum ContactActionTypes {
  ADD_CONTACT = '[CONTACT] Add Item',
  SELECT_CONTACT = '[CONTACT Select Item'
}

export const AddContactAction = createAction(
  ContactActionTypes.ADD_CONTACT,
  props<Contact>()
);

export const SelectContactAction = createAction(
  ContactActionTypes.SELECT_CONTACT,
  props<Contact>()
);
