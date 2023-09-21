import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpFormComponent } from './components/sign-up-form/sign-up-form.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../services/user/user.service';
import { SignUpViewComponent } from './views/sign-up-view/sign-up-view.component';
import { LoginViewComponent } from './views/login-view/login-view.component';
import { RouterModule } from '@angular/router';
import { SendPasswordResetFormComponent } from './components/send-password-reset-form/send-password-reset-form.component';
import { SendPasswordResetPageComponent } from './views/send-password-reset-page/send-password-reset-page.component';
import { ResetPasswordFormComponent } from './components/reset-password-form/reset-password-form.component';
import { ResetPasswordViewComponent } from './views/reset-password-view/reset-password-view.component';

@NgModule({
  declarations: [
    SignUpFormComponent,
    LoginFormComponent,

    SignUpViewComponent,
    LoginViewComponent,
    SendPasswordResetFormComponent,
    SendPasswordResetPageComponent,
    ResetPasswordFormComponent,
    ResetPasswordViewComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  exports: [SignUpViewComponent, LoginViewComponent],
  providers: [UserService],
})
export class AuthModule {}
