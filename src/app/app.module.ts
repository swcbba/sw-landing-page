import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './custom-components/header/header.component';
import { EventDescriptionComponent } from './custom-components/event-description/event-description.component';

import {
  MapModule,
  MapAPILoader,
  BingMapAPILoaderConfig,
  BingMapAPILoader,
  WindowRef,
  DocumentRef
} from 'angular-maps';
import { EventLocationComponent } from './custom-components/event-location/event-location.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, EventDescriptionComponent, EventLocationComponent],
  imports: [BrowserModule, AppRoutingModule, MapModule.forRoot()],
  providers: [
    {
      provide: MapAPILoader,
      deps: [],
      useFactory: MapServiceProviderFactory
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

export function MapServiceProviderFactory() {
  let bc: BingMapAPILoaderConfig = new BingMapAPILoaderConfig();
  bc.apiKey = 'AiieQo9VbTBwg_ZSPdmnE0kbORnnQ7SsHvZ-klkQNOvfrpp5Th6Jvny9H6junIe5';
  bc.branch = 'experimental';
  return new BingMapAPILoader(bc, new WindowRef(), new DocumentRef());
}
