import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

const profilesData = 'assets/data/profiles.json';

@Injectable({
  providedIn: 'root'
})
export class ProfilesService {
  constructor(private http: HttpClient) {}

  getPicturesData(): Observable<any> {
    return this.http.get(profilesData);
  }
}
