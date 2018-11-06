import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';

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
import { QRCodeModule } from 'angularx-qrcode';

import { ES_KEY } from './app.constants';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './custom-components/banner/banner.component';
import { AboutComponent } from './custom-components/about/about.component';
import { CountDownComponent } from './custom-components/countdown/countdown.component';
import { NumberTransformPipe } from './pipes/number-transform/number-transform.pipe';
import { environment } from 'src/environments/environment';
import { HeaderComponent } from './custom-components/header/header.component';
import { PicturesComponent } from './custom-components/pictures/pictures.component';
import { LocationComponent } from './custom-components/location/location.component';
import { FooterComponent } from './custom-components/footer/footer.component';
import { ProfilesComponent } from './custom-components/profiles/profiles.component';
import { StatsComponent } from './custom-components/stats/stats.component';
import { ColorLayerComponent } from './custom-components/color-layer/color-layer.component';
import { ParticipantsComponent } from './custom-components/participants/participants.component';
import { PartnersComponent } from './custom-components/partners/partners.component';
import { FacilitatorProfileComponent } from './custom-components/facilitator-profile/facilitator-profile.component';
import { AccessDeniedComponent } from './custom-components/access-denied/access-denied.component';
import { QRComponent } from './qr-code/qr-code.component';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './authentication/sign-in/sign-in.component';
import { LanguageButtonComponent } from './custom-components/language-button/language-button.component';
import { AssistantsComponent } from './assistants/assistants.component';
import { AppMenuComponent } from './app-menu/app-menu.component';
import { SpinnerLoaderComponent } from './custom-components/spinner-loader/spinner-loader.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { SponsorsComponent } from './custom-components/sponsors/sponsors.component';
import { AccountComponent } from './account/account.component';
import { ChangePasswordComponent } from './account/change-password/change-password.component';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    BannerComponent,
    AboutComponent,
    CountDownComponent,
    NumberTransformPipe,
    HeaderComponent,
    PicturesComponent,
    LocationComponent,
    FooterComponent,
    ProfilesComponent,
    StatsComponent,
    ColorLayerComponent,
    PartnersComponent,
    ParticipantsComponent,
    FacilitatorProfileComponent,
    AccessDeniedComponent,
    QRComponent,
    SignInComponent,
    LanguageButtonComponent,
    AssistantsComponent,
    AppMenuComponent,
    SpinnerLoaderComponent,
    ScheduleComponent,
    SponsorsComponent,
    AccountComponent,
    ChangePasswordComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase, 'my-app-name'), // imports firebase/app needed for everything
    AngularFireAuthModule,
    AngularFirestoreModule,
    MapModule.forRoot(),
    HttpClientModule,
    AppRoutingModule,
    QRCodeModule,
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
  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang(ES_KEY);
    this.translate.use(ES_KEY);
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
