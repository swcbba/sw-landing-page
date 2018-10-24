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

  language = MAP_KEY[ES_KEY];

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    $(() => {
      $('.sidenav').sidenav();
    });
  }

  changeLanguage() {
    const aux = this.language.toLocaleLowerCase() === ES_KEY ? EN_KEY : ES_KEY;
    this.language = MAP_KEY[aux];
    this.translate.use(aux);
  }
}
