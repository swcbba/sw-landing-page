import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { Observable } from 'rxjs';

import { New } from './new';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  constructor(private afs: AngularFirestore) {}

  createNew(message: string): void {
    const data: New = {
      id: this.afs.createId(),
      date: new Date(),
      new: message
    };
    this.afs
      .collection<New>('news')
      .doc(data.id)
      .set(data, { merge: true });
  }

  getNews(): Observable<any> {
    return this.afs
      .collection<any>('news', ref => ref.orderBy('date', 'desc'))
      .valueChanges();
  }
}
