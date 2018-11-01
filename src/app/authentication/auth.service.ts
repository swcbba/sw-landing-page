import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

import { Observable, of } from 'rxjs';
import { take, switchMap } from 'rxjs/operators';

import { UserService } from '../users/user.service';
import { User } from '../users/user';
import { Roles } from '../users/roles';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  displayError: boolean;

  constructor(
    private router: Router,
    private userService: UserService,
    private afAuth: AngularFireAuth,
    protected afs: AngularFirestore
  ) {
    this.displayError = false;
  }

  getAuthUser(): Observable<User> {
    return this.getAuthState().pipe(
      switchMap(user => {
        if (user) {
          return this.userService.getUser(user.uid);
        }
        return of(null);
      })
    );
  }

  login(email, password): void {
    this.displayError = false;
    this.afAuth.auth
      .signInWithEmailAndPassword(email, password)
      .then(credential => {
        this.userService.updateUserData(credential.user);
        this.router.navigate(['/qr-code']);
      })
      .catch(err => {
        this.displayError = true;
        console.error(err);
      });
  }

  logout(): void {
    this.afAuth.auth.signOut().then(() => {
      this.router.navigate(['/login']);
    });
  }

  hasAccess(roles: Roles, url: string): boolean {
    switch (url) {
      case '/qr-code':
        return roles.assistant;
      case '/assistants':
        return roles.staff;
      default:
        return false;
    }
  }

  private getAuthState(): Observable<any> {
    return this.afAuth.authState.pipe(take(1));
  }
}
