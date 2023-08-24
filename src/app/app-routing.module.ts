import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarOwnerListComponent } from './modules/car-owner/components/car-owner-list/car-owner-list.component';
import { NotFoundViewComponent } from './modules/not-found/views/not-found-view/not-found-view.component';
import { AccountProfileViewComponent } from './modules/account/views/account-profile-view/account-profile-view.component';
import { CloseAccountViewComponent } from './modules/account/views/close-account-view/close-account-view.component';
import { ChangePasswordViewComponent } from './modules/account/views/change-password-view/change-password-view.component';
import { ChangeEmailViewComponent } from './modules/account/views/change-email-view/change-email-view.component';
import { EditProfileViewComponent } from './modules/account/views/edit-profile-view/edit-profile-view.component';
import { ForgotPasswordViewComponent } from './modules/auth/views/forgot-password-view/forgot-password-view.component';
import { LoginViewComponent } from './modules/auth/views/login-view/login-view.component';
import { SignUpViewComponent } from './modules/auth/views/sign-up-view/sign-up-view.component';
import { SavedCarsViewComponent } from './modules/saved-car/views/saved-cars-view/saved-cars-view.component';
import { CarViewComponent } from './modules/car/views/car-view/car-view.component';
import { CarsViewComponent } from './modules/car/views/cars-view/cars-view.component';
import { CreateCarViewComponent } from './modules/car/views/create-car-view/create-car-view.component';
import { EditCarViewComponent } from './modules/car/views/edit-car-view/edit-car-view.component';
import { FilterCarsViewComponent } from './modules/car/views/filter-cars-view/filter-cars-view.component';
import { AccessibilityStatementViewComponent } from './modules/info/views/accessibility-statement-view/accessibility-statement-view.component';
import { AboutViewComponent } from './modules/info/views/about-view/about-view.component';
import { PrivacyPolicyViewComponent } from './modules/info/views/privacy-policy-view/privacy-policy-view.component';
import { TermsAndConditionsViewComponent } from './modules/info/views/terms-and-conditions-view/terms-and-conditions-view.component';
import { CookiePolicyViewComponent } from './modules/info/views/cookie-policy-view/cookie-policy-view.component';

const routes: Routes = [
  { path: '', component: FilterCarsViewComponent },
  { path: 'auth/forgot-password', component: ForgotPasswordViewComponent },
  { path: 'auth/login', component: LoginViewComponent },
  { path: 'auth/sign-up', component: SignUpViewComponent },
  { path: 'sell-a-car', component: CreateCarViewComponent },
  { path: 'cars', component: CarsViewComponent },
  { path: 'cars/:id', component: CarViewComponent },
  { path: 'cars/:id/edit', component: EditCarViewComponent },
  { path: 'profile', component: AccountProfileViewComponent },
  { path: 'profile/change-email', component: ChangeEmailViewComponent },
  { path: 'profile/change-password', component: ChangePasswordViewComponent },
  { path: 'profile/close-account', component: CloseAccountViewComponent },
  { path: 'profile/edit-profile', component: EditProfileViewComponent },
  { path: 'profile/my-car-listings', component: CarOwnerListComponent },
  { path: 'saved-cars', component: SavedCarsViewComponent },
  { path: 'info/about', component: AboutViewComponent },
  {
    path: 'info/accessibility-statement',
    component: AccessibilityStatementViewComponent,
  },
  {
    path: 'info/cookie-policy',
    component: CookiePolicyViewComponent,
  },
  { path: 'info/privacy-policy', component: PrivacyPolicyViewComponent },
  {
    path: 'info/terms-and-conditions',
    component: TermsAndConditionsViewComponent,
  },
  { path: '**', component: NotFoundViewComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking',
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
