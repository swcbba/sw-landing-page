import { Component, OnInit } from '@angular/core';

import { ES_KEY, EN_KEY } from '../../app.constants';
import { TranslateService } from '@ngx-translate/core';

declare const $: any;

@Component({
  selector: 'sw-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  language = EN_KEY.toUpperCase();

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    $(() => {
      $('.sidenav').sidenav();
    });
  }

  changeLanguage() {
    const aux = this.language.toLowerCase();
    this.language = aux === EN_KEY ? ES_KEY.toUpperCase() : EN_KEY.toUpperCase();
    this.translate.use(aux);
  }
}
