import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreDocument
} from '@angular/fire/firestore';

import { Observable, Subject } from 'rxjs';

import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  subject: Subject<any> = new Subject<any>();

  constructor(private afs: AngularFirestore) {}

  setUserData(data) {
    this.subject.next(data);
  }

  getUserData(): Observable<any> {
    return this.subject.asObservable();
  }

  getUser(uid: string): Observable<User> {
    return this.afs.doc<User>(`users/${uid}`).valueChanges();
  }

  updateUserData(user): Promise<void> {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(
      `users/${user.uid}`
    );
    const data: User = {
      uid: user.uid,
      email: user.email,
      roles: {
        assistant: true
      }
    };
    return userRef.set(data, { merge: true });
  }
}
