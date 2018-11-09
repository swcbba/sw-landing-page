import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/authentication/auth.service';

declare const $: any;

@Component({
  selector: 'sw-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {
    $(() => {
      $('.sidenav').sidenav();
    });
    this.auth.loading = false;
  }

  accessApp(): void {
    this.auth.loading = true;
    this.router.navigate(['/login']);
  }
}
