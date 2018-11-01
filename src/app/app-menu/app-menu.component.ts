import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';

import { AuthService } from '../authentication/auth.service';
import { User } from '../users/user';

declare const $: any;

@Component({
  selector: 'sw-app-menu',
  templateUrl: './app-menu.component.html',
  styleUrls: ['./app-menu.component.scss']
})
export class AppMenuComponent implements OnInit, OnDestroy {
  logged: boolean;
  private user: User;
  private authSubscription: Subscription;

  constructor(public auth: AuthService) {
    this.logged = false;
    this.authSubscription = this.auth.getAuthUser().subscribe(user => {
      this.logged = !!user;
      this.user = user;
    });
  }

  ngOnInit(): void {
    $(() => {
      $('.sidenav').sidenav();
    });
  }

  ngOnDestroy(): void {
    this.authSubscription.unsubscribe();
  }

  checkVisibility(url): boolean {
    return this.auth.hasAccess(this.user.roles, url);
  }
}
