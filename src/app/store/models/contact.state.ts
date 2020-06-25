import { Contact } from './contact.model';

export type ContactState = Readonly<{
  contactList: Array<Contact>;
  selectedContact: Contact;
}>;
