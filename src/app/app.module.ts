import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import {
  TranslateModule,
  TranslateLoader,
  TranslateService
} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {
  MapModule,
  MapAPILoader,
  BingMapAPILoaderConfig,
  BingMapAPILoader,
  WindowRef,
  DocumentRef
} from 'angular-maps';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './custom-components/header/header.component';
import { EventDescriptionComponent } from './custom-components/event-description/event-description.component';
import { CountDownComponent } from './custom-components/countdown/countdown.component';
import { NumberTransformPipe } from './pipes/number-transform/number-transform.pipe';
import { EventLocationComponent } from './custom-components/event-location/event-location.component';
import { environment } from 'src/environments/environment';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EventDescriptionComponent,
    EventLocationComponent,
    CountDownComponent,
    NumberTransformPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MapModule.forRoot(),
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    {
      provide: MapAPILoader,
      deps: [],
      useFactory: MapServiceProviderFactory
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(translate: TranslateService) {
    translate.setDefaultLang('es');
    translate.use('es');
  }
}
export function MapServiceProviderFactory() {
  const bingMapConfig: BingMapAPILoaderConfig = new BingMapAPILoaderConfig();
  bingMapConfig.apiKey = environment.mapKey;
  bingMapConfig.branch = 'experimental';
  return new BingMapAPILoader(
    bingMapConfig,
    new WindowRef(),
    new DocumentRef()
  );
}
