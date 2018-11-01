import { Component, Input } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';

import { ES_KEY, EN_KEY } from '../../app.constants';

const mainColor = '#5f00ed';

@Component({
  selector: 'sw-language-button',
  templateUrl: './language-button.component.html',
  styleUrls: ['./language-button.component.scss']
})
export class LanguageButtonComponent {
  @Input()
  textColor: string;
  language: string;

  constructor(private translate: TranslateService) {
    this.textColor = mainColor;
    this.language = ES_KEY.toUpperCase();
  }

  changeLanguage(): void {
    const aux = this.language.toLocaleLowerCase() === ES_KEY ? EN_KEY : ES_KEY;
    this.language = aux.toUpperCase();
    this.translate.use(aux);
  }
}
