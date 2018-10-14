import { Component, OnInit } from '@angular/core';

declare const $: any;

@Component({
  selector: 'sw-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  ngOnInit(): void {
    $(() => {
      $('.parallax').parallax();
    });
  }
}
