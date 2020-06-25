import { Component, OnInit } from '@angular/core';
import { Contact } from '../../store/models/contact.model';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { AppState } from '../../store/app.state';
import { SelectContactAction } from '../../store/actions/contact.actions';
import { selectContactList } from '../../store/selectors/contact.selectors';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
  contacts$: Observable<Array<Contact>>;
  selectedContactId: string;

  constructor(
    private store: Store<AppState>,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.contacts$ = this.store.pipe(select(selectContactList));
  }

  public trackById(index, item): string {
    return item.id;
  }

  toggleSelectedContact(contact: Contact): void {
    if (this.selectedContactId !== contact.id) {
      console.log('dispatchingÄ!!!');
      this.store.dispatch(SelectContactAction(contact));
      this.selectedContactId = contact.id;
    } else {
      this.store.dispatch(SelectContactAction(null));
      this.selectedContactId = null;
    }
  }

  highlighting(contact: Contact): string {
    return contact.id === this.selectedContactId ? 'highlight' : '';
  }

  openAddContact() {
    this.router.navigate(['/contactsbook/add']);
  }
}
