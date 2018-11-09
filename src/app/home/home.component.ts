import { Component, OnInit } from '@angular/core';
import { AuthService } from '../authentication/auth.service';

declare const $: any;

@Component({
  selector: 'sw-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  eventDate: string;

  constructor(public auth: AuthService) {
    this.eventDate = '9-11-2018 18:00';
  }

  ngOnInit(): void {
    $(() => {
      $('.scrollspy').scrollSpy({
        scrollOffset: 70
      });
    });
  }
}
