import { Component, OnInit } from '@angular/core';

import { UserService } from '../users/user.service';
import { AuthService } from '../authentication/auth.service';

@Component({
  selector: 'sw-qr-code',
  templateUrl: './qr-code.component.html',
  styleUrls: ['./qr-code.component.scss']
})
export class QRComponent implements OnInit {
  qrText: string;

  constructor(public auth: AuthService, private userService: UserService) {
    this.qrText = 'Sample text';
  }

  ngOnInit() {
    this.userService.getUserData().subscribe(newText => {
      this.qrText = newText;
    });
    /** Uncomment this block to simulate an update of qr code when user data is updated.
    setTimeout(() => {
     this.userService.setUserData("Nuevo dato de usuario");
    }, 8000);
    */
  }
}
