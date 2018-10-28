import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QRComponent } from './custom-components/qr-code/qr-code.component';
import { AccessDeniedComponent } from './custom-components/access-denied/access-denied.component';
import { AuthGuardService } from './service/auth-guard.service';
import { DashboardComponent } from './custom-components/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  // To test this is needing to change the isLogged variable to false in auth.service.ts file.
  {
    path: 'access-denied',
    component: AccessDeniedComponent
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
