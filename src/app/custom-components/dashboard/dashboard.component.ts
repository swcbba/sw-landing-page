import { Component, OnInit } from '@angular/core';

declare const $: any;

@Component({
  selector: 'sw-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
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
