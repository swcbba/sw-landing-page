import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

const PicturesDataURL = 'assets/data/pictures.json';

@Injectable({
  providedIn: 'root'
})
export class PicturesService {
  constructor(private http: HttpClient) {}

  getPicturesData(): Observable<any> {
    return this.http.get(PicturesDataURL);
  }
}
