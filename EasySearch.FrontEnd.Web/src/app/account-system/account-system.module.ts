import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AccountSystemRoutingModule } from './account-system.routing.module';

import { AccountSystemComponent } from './account-system.component';
import { EditProfilePageComponent } from './components';

const components = [AccountSystemComponent, EditProfilePageComponent];
const modules = [CommonModule, FormsModule, AccountSystemRoutingModule];

@NgModule({
  // Add your components, directives, and pipes here
  declarations: [...components],
  // Add required Angular modules here
  imports: [...modules],
  // Export components, directives, and pipes if needed
  exports: [...components],
})
export class AccountSystemModule {}
