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

  constructor(public auth: AuthService) {
    this.qrText = 'QR was not generated yet';
  }

  ngOnInit() {
    this.auth.getAuthUser().subscribe(user => {
      this.qrText = user.uid;
    });
  }
}
