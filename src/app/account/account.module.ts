import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountDetailComponent } from './account-detail/account-detail.component';
import { ChangePasswordFormComponent } from './change-password-form/change-password-form.component';
import { ChangeEmailFormComponent } from './change-email-form/change-email-form.component';
import { CloseAccountFormComponent } from './close-account-form/close-account-form.component';
import { AccountSettingsMenuComponent } from './account-settings-menu/account-settings-menu.component';



@NgModule({
  declarations: [
    AccountDetailComponent,
    ChangePasswordFormComponent,
    ChangeEmailFormComponent,
    CloseAccountFormComponent,
    AccountSettingsMenuComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AccountModule { }
