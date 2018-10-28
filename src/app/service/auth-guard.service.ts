import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { Observable, of } from 'rxjs';

import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

    constructor(private route: Router,
                private auth: AuthService) {}

  canActivate(route, state): Observable<boolean> {
    if (this.auth.isLogged) {
      return of(true);
    } else {
      this.route.navigate(['/access-denied']);
      return of(false);
    }
  }
}
