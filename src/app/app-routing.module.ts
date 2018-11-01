import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QRComponent } from './qr-code/qr-code.component';
import { AccessDeniedComponent } from './custom-components/access-denied/access-denied.component';
import { AuthGuardService } from './authentication/auth-guard.service';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './authentication/sign-in/sign-in.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  // To test this is needing to change the isLogged variable to false in auth.service.ts file.
  {
    path: 'access-denied',
    component: AccessDeniedComponent
  },
  {
    path: 'login',
    component: SignInComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'qr-code',
    component: QRComponent,
    canActivate: [AuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
