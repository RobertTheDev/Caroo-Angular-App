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
import { EditCarViewComponent } from './modules/car/views/edit-car-view/edit-car-view.component';
import { FilterCarsViewComponent } from './modules/car/views/filter-cars-view/filter-cars-view.component';
import { AccessibilityStatementViewComponent } from './modules/info/views/accessibility-statement-view/accessibility-statement-view.component';
import { AboutViewComponent } from './modules/info/views/about-view/about-view.component';
import { PrivacyPolicyViewComponent } from './modules/info/views/privacy-policy-view/privacy-policy-view.component';
import { TermsAndConditionsViewComponent } from './modules/info/views/terms-and-conditions-view/terms-and-conditions-view.component';
import { CookiePolicyViewComponent } from './modules/info/views/cookie-policy-view/cookie-policy-view.component';
import { ChatViewComponent } from './modules/chat/views/chat-view/chat-view.component';
import { CreateCarViewComponent } from './modules/create-car/views/create-car-view/create-car-view.component';
import { SignedInGuard } from './guards/signedIn/signed-in.guard';
import { AuthGuard } from './guards/auth/auth.guard';

const routes: Routes = [
  { path: '', component: FilterCarsViewComponent },
  {
    path: 'auth',
    canActivate: [AuthGuard],
    children: [
      {
        path: 'forgot-password',
        component: ForgotPasswordViewComponent,
      },
      {
        path: 'login',
        component: LoginViewComponent,
      },
      {
        path: 'sign-up',
        component: SignUpViewComponent,
      },
    ],
  },
  { path: 'sell-a-car', component: CreateCarViewComponent },
  { path: 'chat', component: ChatViewComponent },
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
      { path: 'my-car-listings', component: CarOwnerListComponent },
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
