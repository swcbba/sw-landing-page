import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { AssistantsService } from './assistants.service';

@Component({
  selector: 'sw-assistants',
  templateUrl: './assistants.component.html',
  styleUrls: ['./assistants.component.scss']
})
export class AssistantsComponent implements OnInit {
  assistants$: Observable<any>;

  constructor(private assistantsService: AssistantsService) {
    this.assistants$ = this.assistantsService.getAssistants();
  }

  ngOnInit() {}
}
