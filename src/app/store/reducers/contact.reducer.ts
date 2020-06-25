import { ContactState } from '../models/contact.state';
import { Action, createReducer, on } from '@ngrx/store';
import { AddContactAction, SelectContactAction } from '../actions/contact.actions';
import { Contact } from '../models/contact.model';

const initialState: ContactState = {
  contactList:
  [
    {
      id: '1',
      firstName: 'Max',
      lastName: 'Musterperson',
      phone: '+43 1234567',
      email: 'max.musterperson@example.com',
      address: 'Musterstraße 1, 1234 Musterstadt'
    }
  ],
  selectedContact: null
};

const createContactReducer = createReducer(initialState,
  on(AddContactAction, (state, newContact) => {
  const newContactList: Array<Contact> = new Array<Contact>(...state.contactList);
  newContactList.push(newContact);
  return {...state, contactList: newContactList};
  }),
  on(SelectContactAction, (state, newSelectedContact) => {
    return {...state, selectedContact: newSelectedContact};
  })
);

export function contactReducer(state: ContactState = initialState, action: Action){
  return createContactReducer(state, action);
}
