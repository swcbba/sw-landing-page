import { Component, OnInit } from '@angular/core';

import { ES_KEY, EN_KEY, MAP_KEY } from '../../app.constants';
import { TranslateService } from '@ngx-translate/core';

declare const $: any;

@Component({
  selector: 'sw-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  language = MAP_KEY[EN_KEY];

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    $(() => {
      $('.sidenav').sidenav();
    });
  }

  changeLanguage() {
    const aux = this.language.toLowerCase();
    this.language = aux === EN_KEY ? MAP_KEY[ES_KEY] : MAP_KEY[EN_KEY];
    this.translate.use(aux);
  }
}
