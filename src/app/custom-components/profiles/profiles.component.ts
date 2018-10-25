import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProfilesService } from './profiles.service';

@Component({
  selector: 'sw-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.scss']
})
export class ProfilesComponent implements OnInit {
  profiles$: Observable<any>;

  constructor(private profilesService: ProfilesService) {
    this.profiles$ = this.profilesService.getPicturesData();
  }

  ngOnInit() {}
}
