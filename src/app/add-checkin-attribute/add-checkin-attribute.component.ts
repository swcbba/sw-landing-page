import { Component } from '@angular/core';

import { AssistantsService } from '../assistants/assistants.service';

@Component({
  selector: 'sw-add-checkin-attribute',
  templateUrl: './add-checkin-attribute.component.html',
  styleUrls: ['./add-checkin-attribute.component.scss']
})
export class AddCheckinAttributeComponent {
  constructor(private a: AssistantsService) {
    this.a.getAssistants().subscribe(assistants => {
      assistants.forEach(assistant => {
        this.a.updateAssistant(assistant.id);
      });
    });
  }
}
