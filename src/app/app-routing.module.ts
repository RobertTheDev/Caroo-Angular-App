import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarsListComponent } from './car/cars-list/cars-list.component';
import { CarDetailComponent } from './car/car-detail/car-detail.component';
import { PrivacyPolicyComponent } from './info/privacy-policy/privacy-policy.component';
import { TermsAndConditionsComponent } from './info/terms-and-conditions/terms-and-conditions.component';
import { AccessibilityStatementComponent } from './info/accessibility-statement/accessibility-statement.component';
import { AboutComponent } from './info/about/about.component';
import { AccountDetailComponent } from './account/account-detail/account-detail.component';
import { CarOwnerListComponent } from './car-owner/car-owner-list/car-owner-list.component';
import { ChangeEmailFormComponent } from './account/change-email-form/change-email-form.component';
import { ChangePasswordFormComponent } from './account/change-password-form/change-password-form.component';
import { CloseAccountFormComponent } from './account/close-account-form/close-account-form.component';
import { AccountEditProfileComponent } from './account/account-edit-profile/account-edit-profile.component';
import { NotFoundViewComponent } from './not-found-view/not-found-view.component';

const routes: Routes = [
  { path: '', component: CarsListComponent },
  { path: '**', component: NotFoundViewComponent },
  { path: 'cars', component: CarsListComponent },
  { path: 'cars/:id', component: CarDetailComponent },
  { path: 'profile', component: AccountDetailComponent },
  { path: 'profile/close-account', component: CloseAccountFormComponent },
  { path: 'profile/change-password', component: ChangePasswordFormComponent },
  { path: 'profile/change-email', component: ChangeEmailFormComponent },
  { path: 'profile/edit-profile', component: AccountEditProfileComponent },
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
