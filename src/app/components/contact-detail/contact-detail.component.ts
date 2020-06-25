import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from '../../store/models/contact.model';
import { AppState } from '../../store/app.state';
import { select, Store } from '@ngrx/store';
import { selectSelectedContact } from '../../store/selectors/contact.selectors';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.scss']
})
export class ContactDetailComponent implements OnInit {
  contact$: Observable<Contact>;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.contact$ = this.store.pipe(select(selectSelectedContact));
  }

}
