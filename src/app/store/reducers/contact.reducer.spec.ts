import { ContactState } from '../models/contact.state';
import { Contact } from '../models/contact.model';
import {AddContactAction, SelectContactAction} from '../actions/contact.actions';
import { contactReducer } from './contact.reducer';

describe('reducer: contactReducer', () => {
  const initialContact: Contact = {
    id: '1',
    firstName: 'Max',
    lastName: 'Musterperson',
    phone: '+43 664 1234567',
    email: 'max.musterperson@example.com',
    address: 'Musterstraße 1, 1234 Musterstadt'
  };
  describe('case ADD_CONTACT', () => {
    it('should return a new instance with the added contact', () => {

      const initialState: ContactState = {
        contactList: [
          initialContact
        ],
        selectedContact: null
      };

      const newContact: Contact = {
        id: '2',
        firstName: 'Testina',
        lastName: 'Umläuter',
        phone: '+41 7654321',
        email: 'testina.umlaeuter@example.com',
        address: 'Teststraße 1, 2345 Testopia'
      };

      const initialLength = initialState.contactList.length;
      const action = AddContactAction(newContact);
      const newState = contactReducer(initialState, action);

      // check whether the state has changed
      expect(newState).not.toBe(initialState);

      // check whether the selected contact has not been influenced by the adding
      expect(newState.selectedContact).toBe(null);

      // check whether the new state has a contact list
      expect(newState.contactList).toBeTruthy();

      // check whether the first entry has not been changed
      expect(newState.contactList[0]).toBe(initialState.contactList[0]);

      // check whether length of list in state has been increased by one
      expect(newState.contactList.length).toBe(initialLength + 1);

      // check whether values of newly added contact are as set
      expect(newState.contactList[1].firstName).toBe(newContact.firstName);
      expect(newState.contactList[1].lastName).toBe(newContact.lastName);
      expect(newState.contactList[1].phone).toBe(newContact.phone);
      expect(newState.contactList[1].email).toBe(newContact.email);
      expect(newState.contactList[1].address).toBe(newContact.address);
    });
  });

  describe('case SELECT_CONTACT', () => {
    it('should return a new instance with the selected contact', () => {
      const selectableContact = initialContact;

      const initialState: ContactState = {
        contactList: [
          selectableContact
        ],
        selectedContact: null
      };

      const action = SelectContactAction(selectableContact);
      const newState = contactReducer(initialState, action);

      // check whether the state has changed
      expect(newState).not.toBe(initialState);

      // check whether the new state has a selected contact
      expect(newState.selectedContact).toBeTruthy();

      // check whether the selected contact is no longer null
      expect(newState.selectedContact).not.toBe(null);

      // check whether the selected contact is the contact that has been selected
      expect(newState.selectedContact.firstName).toBe(selectableContact.firstName);
      expect(newState.selectedContact.lastName).toBe(selectableContact.lastName);
      expect(newState.selectedContact.phone).toBe(selectableContact.phone);
      expect(newState.selectedContact.email).toBe(selectableContact.email);
      expect(newState.selectedContact.address).toBe(selectableContact.address);

      // check whether the new state has a contact list
      expect(newState.contactList).toBeTruthy();

      // check whether values of the contact have not been changed
      expect(newState.contactList[0].firstName).toBe(selectableContact.firstName);
      expect(newState.contactList[0].lastName).toBe(selectableContact.lastName);
      expect(newState.contactList[0].phone).toBe(selectableContact.phone);
      expect(newState.contactList[0].email).toBe(selectableContact.email);
      expect(newState.contactList[0].address).toBe(selectableContact.address);
    });
  });
});
