import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssistantsService {
  constructor(private afs: AngularFirestore) {}

  getAssistants(): Observable<any> {
    return this.afs.collection<any>('assistants').valueChanges();
  }
}
