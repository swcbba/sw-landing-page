import { Component, OnDestroy } from '@angular/core';

import { AuthService } from 'src/app/authentication/auth.service';

@Component({
  selector: 'sw-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnDestroy {
  currentPassword: string;
  newPassword: string;
  repeatNewPassword: string;

  constructor(private auth: AuthService) {}

  ngOnDestroy(): void {
    this.auth.hideMessages();
  }

  changePassword() {
    this.auth.changePassword(
      this.currentPassword,
      this.newPassword,
      this.repeatNewPassword
    );
    this.currentPassword = '';
    this.newPassword = '';
    this.repeatNewPassword = '';
  }
}
