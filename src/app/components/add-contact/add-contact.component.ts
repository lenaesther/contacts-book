import { Component } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Contact } from '../../store/models/contact.model';
import { ContactState } from '../../store/models/contact.state';
import { Store } from '@ngrx/store';
import { AddContactAction } from '../../store/actions/contact.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss']
})
export class AddContactComponent {
  resetContact: Contact = {
    id: '',
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    address: ''
  };
  newContact = {...this.resetContact};

  constructor(
    private store: Store<ContactState>,
    private router: Router
  ) {
  }

  addItem(): void {
    this.newContact.id = uuid();
    this.store.dispatch(AddContactAction(this.newContact));
    this.newContact = {...this.resetContact};
  }

  openContactsBook() {
    this.router.navigate(['/contactsbook']);
  }
}
