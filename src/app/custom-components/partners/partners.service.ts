import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

const partnersData = 'assets/data/partners.json';

@Injectable({
  providedIn: 'root'
})
export class PartnersService {
  constructor(private http: HttpClient) {}

  getPartnersData(): Observable<any> {
    return this.http.get(partnersData);
  }
}
