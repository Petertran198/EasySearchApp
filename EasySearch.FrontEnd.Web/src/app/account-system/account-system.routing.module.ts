// feature-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountSystemComponent } from './account-system.component';
import { EditProfilePageComponent } from './components';

const routes: Routes = [
  { path: '', component: AccountSystemComponent },
  { path: 'edit-profile', component: EditProfilePageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountSystemRoutingModule {}
