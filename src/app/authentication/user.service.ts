import { Injectable } from '@angular/core';

import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  subject: Subject<any> = new Subject<any>();

  setUserData(data) {
    this.subject.next(data);
  }

  getUserData(): Observable<any> {
    return this.subject.asObservable();
  }
}
