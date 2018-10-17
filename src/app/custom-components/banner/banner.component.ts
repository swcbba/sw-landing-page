import { Component, OnInit } from '@angular/core';

declare const $: any;

@Component({
  selector: 'sw-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  ngOnInit(): void {
    $(() => {
      $('.parallax').parallax();
    });
  }
}
