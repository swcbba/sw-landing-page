import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';
import { take } from 'rxjs/operators';

import { AuthService } from '../authentication/auth.service';

declare const $: any;

@Component({
  selector: 'sw-app-menu',
  templateUrl: './app-menu.component.html',
  styleUrls: ['./app-menu.component.scss']
})
export class AppMenuComponent implements OnInit, OnDestroy {
  logged: boolean;
  private authSubscription: Subscription;

  constructor(public auth: AuthService) {
    this.logged = false;
    this.authSubscription = this.auth
      .getAuthState()
      .pipe(take(1))
      .subscribe(user => {
        this.logged = !!user;
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
}
