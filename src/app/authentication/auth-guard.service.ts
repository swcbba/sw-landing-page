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

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    const authUser: Observable<any> = this.auth.getAuthUser();

    return authUser.pipe(
      map(user => {
        if (state.url === '/login') {
          const falseCondition: boolean = user !== null;
          return this.checkLogIn(falseCondition, '/qr-code');
        }
        const hasAccess = !!user && this.auth.hasAccess(user.roles, state.url);
        return this.checkLogIn(!hasAccess, '/access-denied');
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
