import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import * as messaging from 'firebase/messaging';

import { NewsService } from './news.service';
import { New } from './new';

@Component({
  selector: 'sw-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  message: string;
  news$: Observable<New>;

  constructor(private newsService: NewsService) {
    this.news$ = this.newsService.getNews();
    this.news$.subscribe(news => {
      console.log(news);
    });
  }

  ngOnInit() {
    messaging
      .requestPermission()
      .then(function() {
        console.log('Notification permission granted.');
        // TODO(developer): Retrieve an Instance ID token for use with FCM.
        // ...
      })
      .catch(function(err) {
        console.log('Unable to get permission to notify.', err);
      });
  }

  sendMessage(): void {
    this.newsService.createNew(this.message);
    this.message = '';
  }
}
