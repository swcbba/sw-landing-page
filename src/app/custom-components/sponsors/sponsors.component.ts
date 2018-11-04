import { Component } from '@angular/core';

import { Observable } from 'rxjs';

import { SponsorsService } from './sponsors.service';

@Component({
  selector: 'sw-sponsors',
  templateUrl: './sponsors.component.html',
  styleUrls: ['./sponsors.component.scss']
})
export class SponsorsComponent {
  sponsors$: Observable<any>;
  sponsorFormURL: string;

  constructor(private sponsorsService: SponsorsService) {
    this.sponsors$ = this.sponsorsService.getSponsorsData();
    this.sponsorFormURL = 'https://goo.gl/BA6fSS';
  }
}
