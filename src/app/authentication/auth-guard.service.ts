import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';

import { Observable } from 'rxjs';
import { take, map } from 'rxjs/operators';

import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  constructor(private router: Router, private auth: AuthService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    const authState: Observable<any> = this.auth.getAuthState().pipe(take(1));
    return authState.pipe(
      map(user => {
        if (state.url === '/login') {
          const falseCondition: boolean = user !== null;
          return this.checkLogIn(falseCondition, '/qr-code');
        }
        return this.checkLogIn(user === null, '/access-denied');
      })
    );
  }

  private checkLogIn(falseCondition: boolean, url: string): boolean {
    if (falseCondition) {
      this.router.navigate([url]);
      return false;
    }
    return true;
  }
}
