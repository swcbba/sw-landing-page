import { Component } from '@angular/core';

import { Observable } from 'rxjs';

import { PartnersService } from './partners.service';

@Component({
  selector: 'sw-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss']
})
export class PartnersComponent {
  partners$: Observable<any>;
  constructor(private partnersService: PartnersService) {
    this.partners$ = this.partnersService.getPartnersData();
  }
}
