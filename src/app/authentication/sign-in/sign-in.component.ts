import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

declare const $: any;

@Component({
  selector: 'sw-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  email: string;
  password: string;

  constructor(public auth: AuthService) {}

  ngOnInit() {
    $(() => {
      $('.parallax').parallax();
    });
    this.auth.loading = false;
  }
}
