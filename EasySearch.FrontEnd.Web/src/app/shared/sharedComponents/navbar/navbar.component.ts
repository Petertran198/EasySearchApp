import { Component, Input } from '@angular/core';
import { map } from 'rxjs';
import { AccountSystemService } from 'src/app/account-system/services/account-system.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  isAuthenticated$ = this.accountSystemService.currentUser.pipe(
    map((user) => user !== null)
  );

  constructor(public accountSystemService: AccountSystemService) {}
}
