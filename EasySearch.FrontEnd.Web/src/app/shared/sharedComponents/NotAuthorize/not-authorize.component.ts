// access-denied.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-access-denied',
  templateUrl: './not-authorize.component.html',
  styleUrls: ['./not-authorize.component.scss'],
})
export class NotAuthorizeComponent {
  constructor(private router: Router) {}

  goToLogin() {
    this.router.navigate(['/account']);
  }

  goToHome() {
    this.router.navigate(['/blog']);
  }
}
