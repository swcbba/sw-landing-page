import { Component } from '@angular/core';

import { Observable } from 'rxjs';

import { NewsService } from './news.service';
import { AuthService } from '../authentication/auth.service';
import { New } from './new';

@Component({
  selector: 'sw-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent {
  message: string;
  news$: Observable<New>;
  isStaff: boolean;

  constructor(private newsService: NewsService, private auth: AuthService) {
    this.news$ = this.newsService.getNews();
    this.checkIfUserIsStaff();
  }

  sendMessage(): void {
    this.newsService.createNew(this.message);
    this.message = '';
  }

  private checkIfUserIsStaff(): void {
    this.isStaff = false;
    this.auth.checkAccess('/assistants').subscribe(res => {
      this.isStaff = res;
    });
  }
}
