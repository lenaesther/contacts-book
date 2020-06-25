import { ContactState } from './models/contact.state';

export type AppState = Readonly<{
  contactState: ContactState;
}>;
