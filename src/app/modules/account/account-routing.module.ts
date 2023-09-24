import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateEmailViewComponent } from './views/update-email-view/update-email-view.component';
import { UpdatePasswordViewComponent } from './views/update-password-view/update-password-view.component';
import { VerifyEmailWithTokenViewComponent } from './views/verify-email-with-token-view/verify-email-with-token-view.component';
import { SendEmailVerificationTokenViewComponent } from './views/send-email-verification-token-view/send-email-verification-token-view.component';
import { AccountProfileViewComponent } from './views/account-profile-view/account-profile-view.component';
import { UpdateAccountProfileViewComponent } from './views/update-account-profile-view/update-account-profile-view.component';

const routes: Routes = [
  {
    path: 'profile',
    component: AccountProfileViewComponent,
  },
  {
    path: 'profile/edit',
    component: UpdateAccountProfileViewComponent,
  },
  {
    path: 'update-email',
    component: UpdateEmailViewComponent,
  },
  {
    path: 'update-password',
    component: UpdatePasswordViewComponent,
  },
  {
    path: 'verify-email-address',
    component: SendEmailVerificationTokenViewComponent,
  },
  {
    path: 'verify-email-address/:token',
    component: VerifyEmailWithTokenViewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountRoutingModule {}
