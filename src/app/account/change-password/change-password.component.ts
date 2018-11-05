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
  confirmNewPassword: string;

  constructor(public auth: AuthService) {}

  ngOnDestroy(): void {
    this.auth.hideMessages();
  }

  changePassword() {
    this.auth.changePassword(
      this.currentPassword,
      this.newPassword,
      this.confirmNewPassword
    );
    this.currentPassword = '';
    this.newPassword = '';
    this.confirmNewPassword = '';
  }
}
