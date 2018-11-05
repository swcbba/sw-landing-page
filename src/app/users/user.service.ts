import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreDocument
} from '@angular/fire/firestore';

import { Observable, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from './user';
import { AssistantsService } from '../assistants/assistants.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(
    private assistantsService: AssistantsService,
    private afs: AngularFirestore
  ) {}

  getUser(uid: string): Observable<User> {
    return this.afs.doc<User>(`users/${uid}`).valueChanges();
  }

  updateUserPasswordChanged(uid: string, email: string): Promise<void> {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc<User>(
      `users/${uid}`
    );
    const data: User = {
      uid: uid,
      email: email,
      roles: {
        assistant: true
      },
      passwordChanged: true
    };
    return userRef.set(data, { merge: true });
  }

  createUserInitData(user): Observable<void> {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc<User>(
      `users/${user.uid}`
    );
    return combineLatest(
      userRef.get(),
      this.assistantsService.getAssistantByEmail(user.email)
    ).pipe(
      map(([docSnapshot, assistant]) => {
        if (!docSnapshot.exists) {
          const data: User = {
            uid: user.uid,
            email: user.email,
            roles: {
              assistant: true
            },
            passwordChanged: false
          };
          if (assistant) {
            data.assistantId = assistant.id;
          }
          userRef.set(data, { merge: true });
        }
      })
    );
  }
}
