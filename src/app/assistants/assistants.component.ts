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

  constructor(private assistantsService: AssistantsService) {
    this.search = '';
    this.filterValue = '';
    this.assistants = new Array();
    this.assistantsService.getAssistants().subscribe(assistants => {
      this.assistants = assistants;
      this.assistants.forEach(assistant => {
        assistant.visible = true;
      });
    });
  }

  ngOnInit(): void {
    $(() => {
      $('select').formSelect();
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
    this.assistantsService
      .getAssistantByFilter(this.filterValue, value)
      .subscribe(assistants => {
        this.assistants = assistants;
        this.assistants.forEach(assistant => {
          assistant.visible = true;
        });
      });
  }
}
