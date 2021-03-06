import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ProfilesService } from './profiles.service';

@Component({
  selector: 'sw-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.scss']
})
export class ProfilesComponent {
  profiles$: Observable<any>;

  constructor(private profilesService: ProfilesService) {
    this.profiles$ = this.profilesService.getPicturesData();
  }
}
