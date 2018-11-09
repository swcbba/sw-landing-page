import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Assistant } from './assistant';

@Injectable({
  providedIn: 'root'
})
export class AssistantsService {
  constructor(private afs: AngularFirestore) {}

  getAssistants(): Observable<Array<Assistant>> {
    return this.afs.collection<Assistant>('assistants').valueChanges();
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

  getAssistantsByFilter(attribute, value): Observable<Array<Assistant>> {
    return this.afs
      .collection<Assistant>('assistants', ref =>
        ref.where(attribute, '==', value)
      )
      .valueChanges();
  }

  updateAssistant(assistant: Assistant): void {
    const data: Assistant = {
      id: assistant.id,
      name: assistant.name,
      email: assistant.email,
      checkin: assistant.checkin,
      secondCheckin: assistant.secondCheckin,
      thirdCheckin: assistant.thirdCheckin,
      fridayDinner: assistant.fridayDinner,
      saturdayBreakfast: assistant.saturdayBreakfast,
      saturdayLunch: assistant.saturdayLunch,
      saturdayDinner: assistant.saturdayDinner,
      sundayBreakfast: assistant.sundayBreakfast,
      sundayLunch: assistant.sundayLunch,
      souvenirsCheckin: assistant.souvenirsCheckin
    };
    this.afs
      .collection<Assistant>('assistants')
      .doc(data.id)
      .set(data, { merge: true });
  }
}
