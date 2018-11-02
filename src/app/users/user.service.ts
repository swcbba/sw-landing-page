import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreDocument
} from '@angular/fire/firestore';

import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';

import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private afs: AngularFirestore) {}

  getUser(uid: string): Observable<User> {
    return this.afs.doc<User>(`users/${uid}`).valueChanges();
  }

  createUserInitData(user): void {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc<User>(
      `users/${user.uid}`
    );
    userRef
      .get()
      .pipe(first())
      .subscribe(docSnapshot => {
        if (!docSnapshot.exists) {
          const data: User = {
            uid: user.uid,
            email: user.email,
            roles: {
              assistant: true
            }
          };
          userRef.set(data, { merge: true });
        }
      });
  }
}
