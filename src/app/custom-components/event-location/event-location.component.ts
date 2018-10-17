import { Component, AfterContentChecked, AfterViewChecked, OnInit } from "@angular/core";
import { IMapOptions, IMarkerIconInfo, ILatLong } from "angular-maps";

declare var $: any;
const LATITUDE: number = -17.41809191207568;
const LONGITUDE: number = -66.12963527113635;
@Component({
  selector: "sw-event-location",
  templateUrl: "./event-location.component.html",
  styleUrls: ["./event-location.component.scss"]
})
export class EventLocationComponent implements AfterContentChecked, AfterViewChecked, OnInit {
  isMapRendered: boolean;
  mapFocus: ILatLong;
  mapOptions: IMapOptions;
  iconInfo: IMarkerIconInfo;

  constructor() {
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
      mapTypeId: 7
    };

    this.iconInfo = {
      markerType: 0
    };
  }

  ngOnInit() {
    $('.Infobox').parent().css('display', 'block');
  }

  ngAfterContentChecked() {
    if ($('.Infobox')[0] && !this.isMapRendered) {
      $('.Infobox').parent().css('display', 'block');
      this.isMapRendered = true;
    }
  }

  ngAfterViewChecked() {
    // console.log('ngAfterViewChecked', $('.infobox-body'));
  }

}
