import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactDetailComponent } from './contact-detail.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { Contact } from '../../store/models/contact.model';
import { ContactState } from '../../store/models/contact.state';
import { AppState } from '../../store/app.state';

describe('ContactDetailComponent', () => {
  let component: ContactDetailComponent;
  let fixture: ComponentFixture<ContactDetailComponent>;
  let mockStore: MockStore;
  const initialContact: Contact = {
    id: '1',
    firstName: 'Hugo',
    lastName: 'Mayer',
    phone: '+43 664 1234567',
    email: 'hugo.mayer@dedalus-group.com',
    address: 'Hauptstraße 5, 1010 Wien'
  };

  const showContactState: ContactState = {
    contactList: [initialContact],
    selectedContact: initialContact
  };
  const showAppState: AppState = {
    contactState: showContactState
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactDetailComponent ],
      providers: [
        provideMockStore({  }),
      ]
    })
      .compileComponents();
    mockStore = TestBed.inject(MockStore);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show contact details', () => {
    expect(fixture.nativeElement.querySelector('.wrapper')).toBeFalsy();
    mockStore.setState(showAppState);
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.wrapper')).toBeTruthy();
  });
});
