// feature-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountSystemComponent } from './account-system.component';
import { EditProfilePageComponent } from './components';
import { AuthGuard } from '../guards/auth.guard';

const routes: Routes = [
  { path: '', component: AccountSystemComponent },
  {
    path: 'edit-profile',
    component: EditProfilePageComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountSystemRoutingModule {}
