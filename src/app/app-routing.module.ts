import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactListComponent } from './components/contact-list/contact-list.component';


const routes: Routes = [
  {
    path: 'contactsbook',
    component: ContactListComponent
  },
  { path: '', redirectTo: 'contactsbook', pathMatch: 'full' },
  { path: '**', redirectTo: 'contactsbook' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
