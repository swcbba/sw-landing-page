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
  language: string;

  constructor(private translate: TranslateService) {
    this.language = ES_KEY.toUpperCase();
  }

  ngOnInit(): void {
    $(() => {
      $('.sidenav').sidenav();
    });
  }

  changeLanguage(): void {
    const aux = this.language.toLocaleLowerCase() === ES_KEY ? EN_KEY : ES_KEY;
    this.language = aux.toUpperCase();
    this.translate.use(aux);
  }
}
