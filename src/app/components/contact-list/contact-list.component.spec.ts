import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactListComponent } from './contact-list.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { Router } from '@angular/router';
import { Contact } from '../../store/models/contact.model';
import { ContactState } from '../../store/models/contact.state';

describe('ContactListComponent', () => {
  let component: ContactListComponent;
  let fixture: ComponentFixture<ContactListComponent>;
  const routerSpy = jasmine.createSpyObj('Router', ['navigate']);
  let mockStore: MockStore;
  const initialContact: Contact = {
    id: '1',
    firstName: 'Max',
    lastName: 'Musterperson',
    phone: '+43 664 1234567',
    email: 'max.musterperson@example.com',
    address: 'Musterstraße 1, 1234 Musterstadt'
  };
  const initialState: ContactState = {
    contactList: [
      initialContact
    ],
    selectedContact: null
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactListComponent ],
      providers: [
        provideMockStore({ initialState }),
        { provide: Router,      useValue: routerSpy }
      ]
    })
    .compileComponents();
    mockStore = TestBed.inject(MockStore);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call router navigate to contactsbook/add', () => {
    const addContactButton: HTMLButtonElement = fixture.nativeElement.querySelector('button[name="addContact"]');
    addContactButton.dispatchEvent(new Event('click'));
    fixture.detectChanges();
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/contactsbook/add']);
  });
});
