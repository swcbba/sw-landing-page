import { Component, OnInit } from '@angular/core';

import { AssistantsService } from './assistants.service';
import { Assistant } from './assistant';
import { first } from 'rxjs/operators';

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
    this.filterValue = 'all';
    this.assistants = new Array();
    this.filterAll();
  }

  ngOnInit(): void {
    $(() => {
      $('select').formSelect();
    });
  }

  searchUser(): void {
    const self = this;
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
    const value = $('#filter-checkbox').prop('checked');
    if (this.filterValue === 'all') {
      this.filterAll();
    } else {
      this.assistantsService
        .getAssistantsByFilter(this.filterValue, value)
        .pipe(first())
        .subscribe(assistants => {
          this.assistants = assistants;
          this.assistants.forEach(assistant => {
            assistant.visible = true;
          });
        });
    }
  }

  filterAll(): void {
    this.assistantsService
      .getAssistants()
      .pipe(first())
      .subscribe(assistants => {
        this.assistants = assistants;
        this.assistants.forEach(assistant => {
          assistant.visible = true;
        });
      });
  }

  updateAssistant(assistant: Assistant, attribute: string): void {
    assistant[attribute] = !assistant[attribute];
    this.assistantsService.updateAssistant(assistant);
  }
}
