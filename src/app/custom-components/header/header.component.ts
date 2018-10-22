import { Component, OnInit } from '@angular/core';

import { ES_KEY, EN_KEY } from '../../app.constants';
import { LanguageService } from '../../services/language-service';

declare const $: any;

@Component({
  selector: 'sw-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isChecked = true;

  constructor(private languageService: LanguageService) {}

  ngOnInit(): void {
    $(() => {
      $('.sidenav').sidenav();
    });
    const language = this.languageService.getCurrentLanguage();
    this.isChecked = language !== ES_KEY;
  }

  changeLanguage() {
    const language = this.isChecked ? EN_KEY : ES_KEY;
    this.languageService.setLanguage(language);
    window.location.reload();
  }
}
