import { Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

import * as Materialize from 'materialize-css';

declare const $: any;

@Component({
  selector: 'sw-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private updates: SwUpdate) {
    this.updates.available.subscribe(event => {
      console.log('current version is', event.current);
      console.log('available version is', event.available);
      this.showUpdateMessage();
    });
    this.updates.activated.subscribe(event => {
      console.log('old version was', event.previous);
      console.log('new version is', event.current);
    });
  }

  private showUpdateMessage() {
    const toastHTML =
      '<span>There is a new version of the app.</span><button id="toast-btn" class="btn-flat toast-action main-color">Update</button>';
    Materialize.toast({ html: toastHTML, displayLength: Infinity });
    $('#toast-btn').on('click', () => {
      this.closeUpdateMessage();
      document.location.reload();
    });
  }

  private closeUpdateMessage(): void {
    const toastElement = document.querySelector('.toast');
    const toastInstance = Materialize.Toast.getInstance(toastElement);
    toastInstance.dismiss();
  }
}
