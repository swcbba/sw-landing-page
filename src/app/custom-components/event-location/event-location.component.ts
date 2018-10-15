import { Component, OnInit } from "@angular/core";
import {
  MarkerTypeId,
  IMapOptions,
  IBox,
  IMarkerIconInfo,
  ILatLong
} from "angular-maps";

@Component({
  selector: "sw-event-location",
  templateUrl: "./event-location.component.html",
  styleUrls: ["./event-location.component.scss"]
})
export class EventLocationComponent implements OnInit {
  _markerTypeId = MarkerTypeId;
  mapFocus: ILatLong = {
    latitude: -17.41809191207568,
    longitude: -66.12963527113635
  };
  _options: IMapOptions = {
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

  _iconInfo: IMarkerIconInfo = { 
    markerType: MarkerTypeId.RoundedImageMarker,
    url: 'https://www.bing.com/th?id=A2667b6b7761c986097425649f35aefe8&amp;w=110&amp;h=110&amp;c=12&amp;rs=1&amp;qlt=80&amp;pcl=f9f9f9&amp;cdv=1&amp;pid=16.2',
    size: { width: 70, height: 70 },
    markerOffsetRatio: { x: 0.5, y: 0.5 }
  };

  constructor() {}

  ngOnInit() {}

  _click() {
    console.log("hello world...");
  }
}
