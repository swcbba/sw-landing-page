import { Component, OnInit } from '@angular/core';

declare const $: any;

@Component({
  selector: 'sw-participants',
  templateUrl: './participants.component.html',
  styleUrls: ['./participants.component.scss']
})
export class ParticipantsComponent implements OnInit {
  ngOnInit(): void {
    $(() => {
      $('.parallax').parallax();
    });
  }
}
