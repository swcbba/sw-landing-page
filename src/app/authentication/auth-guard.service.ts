import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AuthService } from './auth.service';
import { User } from '../users/user';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    const authUser: Observable<User> = this.auth.getAuthUser();

    return authUser.pipe(
      map(user => {
        let falseCondition: boolean;
        if (user && !user.passwordChanged) {
          this.auth.displayChangePassword = true;
          falseCondition = state.url !== '/account/change-password';
          return this.checkLogIn(falseCondition, '/account/change-password');
        }
        if (state.url === '/login') {
          falseCondition = !!user;
          return this.checkLogIn(falseCondition, '/qr-code');
        }
        falseCondition = !!user && this.auth.hasAccess(user.roles, state.url);
        return this.checkLogIn(!falseCondition, '/access-denied');
      })
    );
  }

  private checkLogIn(falseCondition: boolean, url: string): boolean {
    this.auth.loading = false;
    if (falseCondition) {
      this.router.navigate([url]);
      return false;
    }
    return true;
  }
}
