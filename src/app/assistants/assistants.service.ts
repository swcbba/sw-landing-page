import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AssistantsService {
  constructor(private afs: AngularFirestore) {}

  getAssistants(): Observable<Array<any>> {
    return this.afs.collection<any>('assistants').valueChanges();
  }

  getAssistant(id: string): Observable<any> {
    return this.afs.doc<any>(`assistants/${id}`).valueChanges();
  }

  getAssistantByEmail(email: string): Observable<any> {
    return this.afs
      .collection<any>('assistants', ref => ref.where('email', '==', email))
      .valueChanges()
      .pipe(
        map(assistants => {
          return assistants.length > 0 ? assistants[0] : null;
        })
      );
  }

  updateAssistant(id: string): void {
    const ref = this.afs.doc<any>(`assistants/${id}`);
    const data = {
      secondCheckin: false,
      thirdCheckin: false,
      fridayDinner: false,
      saturdayBreakfast: false,
      saturdayLunch: false,
      saturdayDinner: false,
      sundayBreakfast: false,
      sundayLunch: false,
      souvenirsCheckin: false
    };
    ref.set(data, {
      merge: true
    });
  }
}
