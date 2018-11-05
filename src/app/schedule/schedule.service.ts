import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

const schedule = 'assets/data/schedule.json';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {
  constructor(private http: HttpClient) {}

  getSchedule(): Observable<any> {
    return this.http.get(schedule);
  }
}
