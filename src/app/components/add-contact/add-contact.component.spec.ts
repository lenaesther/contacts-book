import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AddContactComponent } from './add-contact.component';
import { Contact } from '../../store/models/contact.model';
import { ContactState } from '../../store/models/contact.state';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AddContactAction } from '../../store/actions/contact.actions';

describe('AddContactComponent', () => {
  let component: AddContactComponent;
  let fixture: ComponentFixture<AddContactComponent>;
  const routerSpy = jasmine.createSpyObj('Router', ['navigate']);
  let mockStore: MockStore;
  const initialState: ContactState = {
    contactList: [
      {
        id: '1',
        firstName: 'Max',
        lastName: 'Musterperson',
        phone: '+43 664 1234567',
        email: 'max.musterperson@example.com',
        address: 'Musterstraße 1, 1234 Musterstadt'
      }
    ],
    selectedContact: null
  };
  const testContact: Contact = {
    id: '2',
    firstName: 'Testina',
    lastName: 'Umläuter',
    phone: '+41 7654321',
    email: 'testina.umlaeuter@example.com',
    address: 'Teststraße 1, 2345 Testopia'
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddContactComponent ],
      imports: [ FormsModule ],
      providers: [
        provideMockStore({ initialState }),
        { provide: Router,      useValue: routerSpy }
      ]
    })
    .compileComponents();
    mockStore = TestBed.inject(MockStore);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch AddContactAction', () => {
    component.newContact = testContact;
    spyOn(mockStore, 'dispatch');
    component.addItem();
    expect(mockStore.dispatch).toHaveBeenCalledWith(AddContactAction(testContact));
  });

  it('should reset newContact adter adding', () => {
    const initialContact: Contact = component.newContact;
    component.newContact = testContact;
    component.addItem();
    expect(component.newContact).toEqual(initialContact);
  });

  it('should call router navigate to contactsbook', () => {
    const openContactsBookButton: HTMLButtonElement = fixture.nativeElement.querySelector('button[name="openContactsBook"]');
    openContactsBookButton.dispatchEvent(new Event('click'));
    fixture.detectChanges();
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/contactsbook']);
  });
});
