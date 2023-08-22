import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarsListComponent } from './modules/car/cars-list/cars-list.component';
import { CarDetailComponent } from './modules/car/car-detail/car-detail.component';
import { PrivacyPolicyComponent } from './modules/info/privacy-policy/privacy-policy.component';
import { TermsAndConditionsComponent } from './modules/info/terms-and-conditions/terms-and-conditions.component';
import { AccessibilityStatementComponent } from './modules/info/accessibility-statement/accessibility-statement.component';
import { AboutComponent } from './modules/info/about/about.component';
import { CarOwnerListComponent } from './modules/car-owner/car-owner-list/car-owner-list.component';
import { NotFoundViewComponent } from './modules/not-found/not-found-view/not-found-view.component';
import { AccountProfileViewComponent } from './modules/account/views/account-profile-view/account-profile-view.component';
import { CloseAccountViewComponent } from './modules/account/views/close-account-view/close-account-view.component';
import { ChangePasswordViewComponent } from './modules/account/views/change-password-view/change-password-view.component';
import { ChangeEmailViewComponent } from './modules/account/views/change-email-view/change-email-view.component';
import { EditProfileViewComponent } from './modules/account/views/edit-profile-view/edit-profile-view.component';
import { ForgotPasswordViewComponent } from './modules/auth/views/forgot-password-view/forgot-password-view.component';
import { LoginViewComponent } from './modules/auth/views/login-view/login-view.component';
import { SignUpViewComponent } from './modules/auth/views/sign-up-view/sign-up-view.component';

const routes: Routes = [
  { path: '', component: CarsListComponent },
  { path: '**', component: NotFoundViewComponent },

  { path: 'auth/sign-up', component: SignUpViewComponent },
  { path: 'auth/login', component: LoginViewComponent },
  { path: 'auth/forgot-password', component: ForgotPasswordViewComponent },

  { path: 'cars', component: CarsListComponent },
  { path: 'cars/:id', component: CarDetailComponent },
  { path: 'profile', component: AccountProfileViewComponent },
  { path: 'profile/close-account', component: CloseAccountViewComponent },
  { path: 'profile/change-password', component: ChangePasswordViewComponent },
  { path: 'profile/change-email', component: ChangeEmailViewComponent },
  { path: 'profile/edit-profile', component: EditProfileViewComponent },
  { path: 'profile/my-car-listings', component: CarOwnerListComponent },
  { path: 'about', component: AboutComponent },
  {
    path: 'accessibility-statement',
    component: AccessibilityStatementComponent,
  },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'terms-and-conditions', component: TermsAndConditionsComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
