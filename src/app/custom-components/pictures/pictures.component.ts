import { Component, OnInit } from '@angular/core';

declare const $: any;

@Component({
  selector: 'sw-pictures',
  templateUrl: './pictures.component.html',
  styleUrls: ['./pictures.component.scss']
})
export class PicturesComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    $(() => {
      $('.slider').slider({
        indicators: false,
        height: 500
      });
    });
  }
}
