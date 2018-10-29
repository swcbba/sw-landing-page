import { Component, OnInit } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';

import { UserService } from '../service/user.service';
import { ES_KEY, EN_KEY } from '../app.constants';

@Component({
  selector: 'sw-qr-code',
  templateUrl: './qr-code.component.html',
  styleUrls: ['./qr-code.component.scss']
})
export class QRComponent implements OnInit {
  qrText = 'Sample text';
  language: string;

  constructor(
    private userService: UserService,
    private translate: TranslateService
  ) {
    this.language = ES_KEY.toUpperCase();
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

  changeLanguage(): void {
    const aux = this.language.toLocaleLowerCase() === ES_KEY ? EN_KEY : ES_KEY;
    this.language = aux.toUpperCase();
    this.translate.use(aux);
  }
}
