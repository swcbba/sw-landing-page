import { Component, OnInit } from '@angular/core';

declare const $: any;

@Component({
  selector: 'sw-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    $(() => {
      $('.parallax').parallax();
    });
  }
}
