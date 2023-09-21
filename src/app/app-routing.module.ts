import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundViewComponent } from './modules/not-found/views/not-found-view/not-found-view.component';
import { AccountProfileViewComponent } from './modules/account/views/account-profile-view/account-profile-view.component';
import { CloseAccountViewComponent } from './modules/account/views/close-account-view/close-account-view.component';
import { ChangePasswordViewComponent } from './modules/account/views/change-password-view/change-password-view.component';
import { ChangeEmailViewComponent } from './modules/account/views/change-email-view/change-email-view.component';
import { EditProfileViewComponent } from './modules/account/views/edit-profile-view/edit-profile-view.component';
import { LoginViewComponent } from './modules/auth/views/login-view/login-view.component';
import { SignUpViewComponent } from './modules/auth/views/sign-up-view/sign-up-view.component';
import { SavedCarsViewComponent } from './modules/saved-car/views/saved-cars-view/saved-cars-view.component';
import { CarViewComponent } from './modules/car/views/car-view/car-view.component';
import { CarsViewComponent } from './modules/car/views/cars-view/cars-view.component';
import { EditCarViewComponent } from './modules/car/views/edit-car-view/edit-car-view.component';
import { FilterCarsViewComponent } from './modules/car/views/filter-cars-view/filter-cars-view.component';
import { AccessibilityStatementViewComponent } from './modules/info/views/accessibility-statement-view/accessibility-statement-view.component';
import { AboutViewComponent } from './modules/info/views/about-view/about-view.component';
import { PrivacyPolicyViewComponent } from './modules/info/views/privacy-policy-view/privacy-policy-view.component';
import { TermsAndConditionsViewComponent } from './modules/info/views/terms-and-conditions-view/terms-and-conditions-view.component';
import { CookiePolicyViewComponent } from './modules/info/views/cookie-policy-view/cookie-policy-view.component';
import { CreateCarViewComponent } from './modules/create-car/views/create-car-view/create-car-view.component';
import { VerifyEmailViewComponent } from './modules/account/views/verify-email-view/verify-email-view.component';
import { PreviewCarViewComponent } from './modules/create-car/views/preview-car-view/preview-car-view.component';
import { AddCarPriceViewComponent } from './modules/create-car/views/add-car-price-view/add-car-price-view.component';
import { AddCarLocationViewComponent } from './modules/create-car/views/add-car-location-view/add-car-location-view.component';
import { AddCarImagesViewComponent } from './modules/create-car/views/add-car-images-view/add-car-images-view.component';
import { AddCarFeaturesViewComponent } from './modules/create-car/views/add-car-features-view/add-car-features-view.component';
import { AddCarDetailsViewComponent } from './modules/create-car/views/add-car-details-view/add-car-details-view.component';
import { AddCarDescriptionViewComponent } from './modules/create-car/views/add-car-description-view/add-car-description-view.component';
import { AddCarAboutViewComponent } from './modules/create-car/views/add-car-about-view/add-car-about-view.component';
import { AccountCarListingsViewComponent } from './modules/account/views/account-car-listings-view/account-car-listings-view.component';
import { SendPasswordResetPageComponent } from './modules/auth/views/send-password-reset-page/send-password-reset-page.component';
import { ResetPasswordViewComponent } from './modules/auth/views/reset-password-view/reset-password-view.component';

const routes: Routes = [
  { path: '', component: FilterCarsViewComponent },
  {
    path: 'auth',

    children: [
      {
        path: 'forgot-password',
        component: SendPasswordResetPageComponent,
      },
      {
        path: 'login',
        component: LoginViewComponent,
      },
      {
        path: 'reset-password',
        component: ResetPasswordViewComponent,
      },
      {
        path: 'sign-up',
        component: SignUpViewComponent,
      },
    ],
  },
  {
    path: 'sell-a-car',
    children: [
      { path: '', component: CreateCarViewComponent },
      { path: 'add-about', component: AddCarAboutViewComponent },
      { path: 'add-description', component: AddCarDescriptionViewComponent },
      { path: 'add-details', component: AddCarDetailsViewComponent },
      { path: 'add-features', component: AddCarFeaturesViewComponent },
      { path: 'add-images', component: AddCarImagesViewComponent },
      { path: 'add-location', component: AddCarLocationViewComponent },
      { path: 'add-price', component: AddCarPriceViewComponent },
      { path: 'preview', component: PreviewCarViewComponent },
    ],
  },
  {
    path: 'cars',
    children: [
      { path: '', component: CarsViewComponent },
      { path: ':id', component: CarViewComponent },
      { path: ':id/edit', component: EditCarViewComponent },
    ],
  },
  {
    path: 'profile',
    children: [
      { path: '', component: AccountProfileViewComponent },
      { path: 'change-email', component: ChangeEmailViewComponent },
      { path: 'change-password', component: ChangePasswordViewComponent },
      { path: 'close-account', component: CloseAccountViewComponent },
      { path: 'edit-profile', component: EditProfileViewComponent },
      { path: 'my-car-listings', component: AccountCarListingsViewComponent },
      { path: 'verify-email', component: VerifyEmailViewComponent },
    ],
  },
  { path: 'saved-cars', component: SavedCarsViewComponent },
  {
    path: 'info',
    children: [
      { path: 'about', component: AboutViewComponent },
      {
        path: 'accessibility-statement',
        component: AccessibilityStatementViewComponent,
      },
      {
        path: 'cookie-policy',
        component: CookiePolicyViewComponent,
      },
      { path: 'privacy-policy', component: PrivacyPolicyViewComponent },
      {
        path: 'terms-and-conditions',
        component: TermsAndConditionsViewComponent,
      },
    ],
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
