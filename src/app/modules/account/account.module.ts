import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { AccountEditProfileComponent } from './components/account-edit-profile/account-edit-profile.component';
import { AccountSettingsLayoutComponent } from './components/account-settings-layout/account-settings-layout.component';
import { AccountSettingsMenuComponent } from './components/account-settings-menu/account-settings-menu.component';
import { CloseAccountFormComponent } from './components/close-account-form/close-account-form.component';
import { ChangeEmailFormComponent } from './components/change-email-form/change-email-form.component';
import { ChangePasswordFormComponent } from './components/change-password-form/change-password-form.component';
import { AccountDetailComponent } from './components/account-detail/account-detail.component';
import { AccountProfileViewComponent } from './views/account-profile-view/account-profile-view.component';
import { EditProfileViewComponent } from './views/edit-profile-view/edit-profile-view.component';
import { ChangeEmailViewComponent } from './views/change-email-view/change-email-view.component';
import { ChangePasswordViewComponent } from './views/change-password-view/change-password-view.component';
import { CloseAccountViewComponent } from './views/close-account-view/close-account-view.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';

@NgModule({
  declarations: [
    AccountDetailComponent,
    ChangePasswordFormComponent,
    ChangeEmailFormComponent,
    CloseAccountFormComponent,
    AccountSettingsMenuComponent,
    AccountSettingsLayoutComponent,
    AccountEditProfileComponent,
    AccountProfileViewComponent,
    EditProfileViewComponent,
    ChangeEmailViewComponent,
    ChangePasswordViewComponent,
    CloseAccountViewComponent,
  ],
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  exports: [
    AccountProfileViewComponent,
    EditProfileViewComponent,
    ChangeEmailViewComponent,
    ChangePasswordViewComponent,
    CloseAccountViewComponent,
    AccountSettingsLayoutComponent,
  ],
  providers: [AuthService],
})
export class AccountModule {}
