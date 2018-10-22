import { Injectable } from '@angular/core';

import { LANGUAGE_KEY } from '../app.constants';

@Injectable()
export class LanguageService {

  getCurrentLanguage(): string {
    return localStorage.getItem(LANGUAGE_KEY);
  }

  setLanguage(language): void {
    localStorage.setItem(LANGUAGE_KEY, language);
  }
}
