import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private router: Router, private afAuth: AngularFireAuth) {}

  getAuthState(): Observable<any> {
    return this.afAuth.authState;
  }

  login(email, password): void {
    this.afAuth.auth
      .signInWithEmailAndPassword(email, password)
      .then(signInData => {
        if (signInData.user.uid) {
          this.router.navigate(['/qr-code']);
        }
      })
      .catch(err => {
        console.error(err);
      });
  }

  logout(): void {
    this.afAuth.auth.signOut().then(() => {
      this.router.navigate(['/login']);
    });
  }
}
