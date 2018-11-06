import { Component } from '@angular/core';

import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { AuthService } from '../authentication/auth.service';
import { AssistantsService } from '../assistants/assistants.service';

@Component({
  selector: 'sw-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent {
  user$: Observable<any>;

  constructor(
    private auth: AuthService,
    private assistantService: AssistantsService
  ) {
    this.user$ = this.auth.getAuthUser().pipe(
      switchMap(user => {
        if (user.assistantId) {
          return this.assistantService.getAssistant(user.assistantId);
        }
        return of(user);
      })
    );
  }
}
