import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountDetailComponent } from './account-detail/account-detail.component';
import { ChangePasswordFormComponent } from './change-password-form/change-password-form.component';
import { ChangeEmailFormComponent } from './change-email-form/change-email-form.component';
import { CloseAccountFormComponent } from './close-account-form/close-account-form.component';
import { AccountSettingsMenuComponent } from './account-settings-menu/account-settings-menu.component';
import { AccountSettingsLayoutComponent } from './account-settings-layout/account-settings-layout.component';
import { AccountEditProfileComponent } from './account-edit-profile/account-edit-profile.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AccountDetailComponent,
    ChangePasswordFormComponent,
    ChangeEmailFormComponent,
    CloseAccountFormComponent,
    AccountSettingsMenuComponent,
    AccountSettingsLayoutComponent,
    AccountEditProfileComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    AccountEditProfileComponent,
    AccountDetailComponent,
    ChangePasswordFormComponent,
    ChangeEmailFormComponent,
    CloseAccountFormComponent,
    AccountSettingsLayoutComponent,
  ],
})
export class AccountModule {}
