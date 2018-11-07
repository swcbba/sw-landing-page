import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

import { first } from 'rxjs/operators';

import { AssistantsService } from '../assistants/assistants.service';

const initPassword = 'tgswc18';

@Component({
  selector: 'sw-create-credentials',
  templateUrl: './create-credentials.component.html',
  styleUrls: ['./create-credentials.component.scss']
})
export class CreateCredentialsComponent implements OnInit {
  constructor(
    private assistantsService: AssistantsService,
    private afAuth: AngularFireAuth
  ) {}

  ngOnInit() {}

  createCredentials(): void {
    this.assistantsService
      .getAssistants()
      .pipe(first())
      .subscribe(assistants => {
        let successCount = 0;
        let errorCount = 0;
        assistants.forEach(assistant => {
          this.afAuth.auth
            .createUserWithEmailAndPassword(
              assistant.email.replace(/ /g, ''),
              initPassword
            )
            .then(user => {
              successCount++;
              console.log('Success count:', successCount, user);
            })
            .catch(err => {
              errorCount++;
              console.error('Error count:', errorCount, assistant, err);
            });
        });
      });
  }
}
