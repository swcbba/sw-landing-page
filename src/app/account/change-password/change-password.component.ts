import { Component } from '@angular/core';

import { AuthService } from 'src/app/authentication/auth.service';

@Component({
  selector: 'sw-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent {
  currentPassword: string;
  newPassword: string;
  repeatNewPassword: string;

  constructor(private auth: AuthService) {}

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
