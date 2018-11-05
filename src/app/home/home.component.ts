import { Component, OnInit } from '@angular/core';

declare const $: any;

@Component({
  selector: 'sw-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  eventDate: string;

  constructor() {
    this.eventDate = '9-11-2018 15:00';
  }

  ngOnInit(): void {
    $(() => {
      $('.scrollspy').scrollSpy({
        scrollOffset: 70
      });
    });
  }
}
