// feature-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountSystemComponent } from './account-system.component';

const routes: Routes = [{ path: '', component: AccountSystemComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountSystemRoutingModule {}
