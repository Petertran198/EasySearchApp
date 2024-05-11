import { Component, Input } from '@angular/core';

@Component({
  selector: 'edit-profile-page',
  templateUrl: './edit-profile-page.component.html',
  styleUrls: ['./edit-profile-page.component.scss'],
})
export class EditProfilePageComponent {
  formTab: string = 'Profile';
  activeFormTab: number = 1;

  toggleForm(formTab: string, activeFormTab: number) {
    this.formTab = formTab;
    this.activeFormTab = activeFormTab;
  }
}
