import { Component, OnInit } from '@angular/core';

declare const $: any;

@Component({
  selector: 'sw-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {
  ngOnInit() {
    $(() => {
      $('.tabs').tabs({
        swipeable: true
      });
    });
  }
}
