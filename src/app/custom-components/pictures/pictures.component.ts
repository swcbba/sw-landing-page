import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { PicturesService } from './pictures.service';

declare const $: any;

@Component({
  selector: 'sw-pictures',
  templateUrl: './pictures.component.html',
  styleUrls: ['./pictures.component.scss']
})
export class PicturesComponent implements OnInit {
  picturesData$: Observable<any>;

  constructor(private picturesService: PicturesService) {
    this.picturesData$ = this.picturesService.getPicturesData();
  }

  ngOnInit(): void {
    $(() => {
      $('.slider').slider({
        indicators: false,
        height: 700,
        duration: 2000,
        interval: 3000
      });
    });
  }
}
