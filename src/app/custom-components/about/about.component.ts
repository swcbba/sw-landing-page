import { Component, OnInit } from '@angular/core';

declare const $: any;

@Component({
  selector: 'sw-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  ngOnInit(): void {
    $(() => {
      $('.parallax').parallax();
    });
  }
}
