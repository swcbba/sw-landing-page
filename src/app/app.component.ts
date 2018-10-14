import { Component } from '@angular/core';

@Component({
  selector: 'sw-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  eventDate: string;

  constructor() {
    // You must use this format: DD-MM-YYYY HH:mm
    this.eventDate = '9-11-2018 15:00';
  }
}
