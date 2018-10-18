import { Component } from '@angular/core';
import { IMapOptions, IMarkerIconInfo, ILatLong } from 'angular-maps';

const LATITUDE = -17.41809191207568;
const LONGITUDE = -66.12963527113635;

@Component({
  selector: 'sw-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent {
  mapRedirectionUrl: string;
  isMapRendered: boolean;
  mapFocus: ILatLong;
  mapOptions: IMapOptions;
  iconInfo: IMarkerIconInfo;
  lat: number;
  lng: number;

  constructor() {
    this.lat = LATITUDE;
    this.lng = LONGITUDE;
    this.mapRedirectionUrl = `//www.google.com/maps/dir/${LATITUDE},${LONGITUDE}/@${LATITUDE},${LONGITUDE},18z`;
    this.isMapRendered = false;
    this.mapFocus = {
      latitude: LATITUDE,
      longitude: LONGITUDE
    };

    this.mapOptions = {
      showMapTypeSelector: false,
      disablePanning: true,
      disableZooming: true,
      center: this.mapFocus,
      zoom: 17,
      showCopyright: false,
      showBreadcrumb: false,
      showScalebar: false,
      showDashboard: false,
      mapTypeId: 7
    };

    this.iconInfo = {
      markerType: 0
    };
  }
}
