import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

import { Observable, of } from 'rxjs';
import { take, switchMap, first } from 'rxjs/operators';
import * as firebase from 'firebase/app';

import { UserService } from '../users/user.service';
import { User } from '../users/user';
import { Roles } from '../users/roles';

const passMinChar = 6;

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loading: boolean;
  displayError: boolean;
  passwordChanged: boolean;
  displayChangePassword: boolean;

  constructor(
    private router: Router,
    private userService: UserService,
    private afAuth: AngularFireAuth
  ) {
    this.hideMessages();
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

  getAuthUserAssociatedAssistant(): Observable<any> {
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
    this.loading = true;
    this.displayError = false;
    this.afAuth.auth
      .signInWithEmailAndPassword(email, password)
      .then(credential => {
        this.userService
          .createUserInitData(credential.user)
          .pipe(first())
          .subscribe(() => {
            this.router.navigate(['/qr-code']);
          });
      })
      .catch(err => {
        this.handleError(err);
      });
  }

  logout(): void {
    this.afAuth.auth.signOut().then(() => {
      this.router.navigate(['/login']);
    });
  }

  changePassword(
    currentPassword: string,
    newPassword: string,
    confirmNewPassword: string
  ): void {
    this.loading = true;
    this.displayError = false;
    this.passwordChanged = false;
    if (newPassword === confirmNewPassword && newPassword.length >= passMinChar) {
      const user = this.afAuth.auth.currentUser;
      const credential = firebase.auth.EmailAuthProvider.credential(
        user.email,
        currentPassword
      );
      user
        .reauthenticateAndRetrieveDataWithCredential(credential)
        .then(() => {
          user
            .updatePassword(newPassword)
            .then(() => {
              if (this.displayChangePassword) {
                this.userService
                  .updateUserPasswordChanged(user.uid, user.email)
                  .then(() => {
                    this.displayChangePassword = false;
                    this.router.navigate(['/qr-code']);
                  });
              }
              this.loading = false;
              this.passwordChanged = true;
            })
            .catch(err => {
              this.handleError(err);
            });
        })
        .catch(err => {
          this.handleError(err);
        });
    } else {
      this.handleError('Confirmed password is not the same');
    }
  }

  hasAccess(roles: Roles, url: string): boolean {
    switch (url) {
      case '/qr-code':
        return roles.assistant;
      case '/assistants':
        return roles.staff;
      default:
        return true;
    }
  }

  hideMessages(): void {
    this.loading = false;
    this.displayError = false;
    this.passwordChanged = false;
    this.displayChangePassword = false;
  }

  private getAuthState(): Observable<any> {
    return this.afAuth.authState.pipe(take(1));
  }

  private handleError(err: string): void {
    this.loading = false;
    this.displayError = true;
    console.error(err);
  }
}
