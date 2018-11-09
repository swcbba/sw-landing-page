import { Component, OnInit } from '@angular/core';
import { AssistantsService } from '../assistants/assistants.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'sw-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss']
})
export class SupportComponent implements OnInit {
  assistants$: Observable<any>;
  constructor(private assistants: AssistantsService) {
    this.assistants$ = this.assistants.getAssistants();
  }

  ngOnInit() {}
}
