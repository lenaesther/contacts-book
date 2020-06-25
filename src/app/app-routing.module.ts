import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { AddContactComponent } from './components/add-contact/add-contact.component';


const routes: Routes = [
  {
    path: 'contactsbook',
    component: ContactListComponent
  },
  {
    path: 'contactsbook/add',
    component: AddContactComponent
  },
  { path: '', redirectTo: 'contactsbook', pathMatch: 'full' },
  { path: '**', redirectTo: 'contactsbook' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
