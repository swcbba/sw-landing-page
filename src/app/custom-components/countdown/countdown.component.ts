import { Component, OnInit, Input } from '@angular/core';

import * as moment from 'moment';

@Component({
  selector: 'sw-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountDownComponent implements OnInit {
  @Input() date;
  finishDate;
  daysRemaning;
  hoursRemaning;
  minutesRemaning;
  secondsRemaning;
  isFinsshedDate = false;

  ngOnInit() {
    this.finishDate = moment(this.date);
    setInterval(() => {
      const today = moment();
      this.daysRemaning = this.finishDate.diff(today, 'days') % 365;
      this.hoursRemaning = this.finishDate.diff(today, 'hours') % 24;
      this.minutesRemaning = this.finishDate.diff(today, 'minutes') % 60;
      this.secondsRemaning = this.finishDate.diff(today, 'seconds') % 60;
      this.isFinsshedDate = this.finishDate.isSameOrBefore(today);
    }, 1000);
  }

}
