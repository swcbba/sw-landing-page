import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QRComponent } from './qr-code/qr-code.component';
import { AccessDeniedComponent } from './custom-components/access-denied/access-denied.component';
import { AuthGuardService } from './authentication/auth-guard.service';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './authentication/sign-in/sign-in.component';
import { AssistantsComponent } from './assistants/assistants.component';
import { AccountComponent } from './account/account.component';
import { ChangePasswordComponent } from './account/change-password/change-password.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
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
  },
  {
    path: 'assistants',
    component: AssistantsComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'account',
    component: AccountComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'account/change-password',
    component: ChangePasswordComponent,
    canActivate: [AuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
