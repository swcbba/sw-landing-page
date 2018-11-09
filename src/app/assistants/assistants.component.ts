import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { AssistantsService } from './assistants.service';

import { Assistant } from './assistant';

declare const $: any;
@Component({
  selector: 'sw-assistants',
  templateUrl: './assistants.component.html',
  styleUrls: ['./assistants.component.scss']
})
export class AssistantsComponent implements OnInit {
  search: string;
  filterValue: string;
  assistants: Array<Assistant>;
  assistants$: Observable<Assistant[]>;

  constructor(private assistantsService: AssistantsService) {
    this.search = '';
    this.filterValue = '';
    this.assistants = new Array();
    this.assistants$ = this.assistantsService.getAssistants();
    this.assistants$.subscribe(data => {
      this.assistants = data;
      this.assistants.forEach(assistant => {
        assistant.visible = true;
      });
    });
  }

  searchUser(): void {
    let self = this;
    this.assistants.forEach(function(assistant) {
      assistant.visible = assistant.name
        .toLowerCase()
        .includes(self.search.toLowerCase());
    });
    if (this.search === '') {
      this.assistants.forEach(assistant => {
        assistant.visible = true;
      });
    }
  }

  filterByStatus(): void {
    let value = $('#filter-checkbox').prop('checked');
    console.log('status', this.filterValue, value);
    this.assistantsService.getAssistantByFilter(this.filterValue, value).subscribe(data => {
      console.log(data);
    });
  }

  ngOnInit() {
    $(document).ready(function() {
      $('select').formSelect();
    });
  }
}
