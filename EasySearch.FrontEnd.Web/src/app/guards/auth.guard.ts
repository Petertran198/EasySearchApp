import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { AccountSystemService } from '../account-system/services/account-system.service';
@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private accountSystemService: AccountSystemService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.accountSystemService.currentUser.pipe(
      take(1),
      map((user) => {
        const isAuthenticated = user !== null;

        if (isAuthenticated) {
          return true;
        } else {
          this.router.navigate(['/not-authorize']);
          return false;
        }
      })
    );
  }
}
