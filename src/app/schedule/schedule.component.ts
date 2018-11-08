import { Component, OnInit } from '@angular/core';
import { ScheduleService } from './schedule.service';
import { Observable } from 'rxjs';
import { shallowEqual } from '@angular/router/src/utils/collection';

declare const $: any;

@Component({
  selector: 'sw-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {
  schedule$: Observable<any>;
  wednesdaySchedule: Array<any>;
  fridaySchedule: Array<any>;
  saturdaydaySchedule: Array<any>;
  sundaySchedule: Array<any>;

  constructor(private scheduleService: ScheduleService) {
    this.wednesdaySchedule = new Array<any>();
    this.fridaySchedule = new Array<any>();
    this.saturdaydaySchedule = new Array<any>();
    this.sundaySchedule = new Array<any>();
    this.schedule$ = this.scheduleService.getSchedule();
    this.schedule$.subscribe(data => {
      this.wednesdaySchedule = data[0].schedule;
      this.fridaySchedule = data[1].schedule;
      this.saturdaydaySchedule = data[2].schedule;
      this.sundaySchedule = data[3].schedule;
    });
  }

  ngOnInit() {
    $('.tabs').tabs({
      swipeable: true,
      onShow: function() {
        const contentKey = $(this.$activeTabLink)
          .attr('href')
          .replace('#', '');
        let tabContentHeight = 0;
        if ($('#' + contentKey + ' .card-panel')[0]) {
          $('#' + contentKey + ' .card-panel').each(function() {
            tabContentHeight += $(this).height() + 48 + 20;
          });
          $('.tabs-content').css('height', tabContentHeight + 40 + 'px');
        }
      }
    });
  }
}
