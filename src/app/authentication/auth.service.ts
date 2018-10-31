import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  displayError: boolean;

  constructor(private router: Router, private afAuth: AngularFireAuth) {
    this.displayError = false;
  }

  getAuthState(): Observable<any> {
    return this.afAuth.authState;
  }

  login(email, password): void {
    this.afAuth.auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        this.displayError = false;
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
}
