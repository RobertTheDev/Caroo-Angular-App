import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateEmailFormComponent } from './components/update-email-form/update-email-form.component';
import { UpdatePasswordFormComponent } from './components/update-password-form/update-password-form.component';
import { VerifyEmailFormComponent } from './components/verify-email-form/verify-email-form.component';
import { SendEmailVerificationTokenFormComponent } from './components/send-email-verification-token-form/send-email-verification-token-form.component';
import { VerifyEmailWithTokenViewComponent } from './views/verify-email-with-token-view/verify-email-with-token-view.component';
import { SendEmailVerificationTokenViewComponent } from './views/send-email-verification-token-view/send-email-verification-token-view.component';
import { UpdatePasswordViewComponent } from './views/update-password-view/update-password-view.component';
import { UpdateEmailViewComponent } from './views/update-email-view/update-email-view.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    UpdateEmailFormComponent,
    UpdatePasswordFormComponent,
    VerifyEmailFormComponent,
    SendEmailVerificationTokenFormComponent,
    VerifyEmailWithTokenViewComponent,
    SendEmailVerificationTokenViewComponent,
    UpdatePasswordViewComponent,
    UpdateEmailViewComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule],
})
export class AccountModule {}
