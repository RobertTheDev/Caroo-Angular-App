import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpFormComponent } from './components/sign-up-form/sign-up-form.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../services/user/user.service';
import { ForgotPasswordFormComponent } from './components/forgot-password-form/forgot-password-form.component';
import { SignUpViewComponent } from './views/sign-up-view/sign-up-view.component';
import { LoginViewComponent } from './views/login-view/login-view.component';
import { ForgotPasswordViewComponent } from './views/forgot-password-view/forgot-password-view.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    SignUpFormComponent,
    LoginFormComponent,
    ForgotPasswordFormComponent,
    SignUpViewComponent,
    LoginViewComponent,
    ForgotPasswordViewComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  exports: [
    SignUpViewComponent,
    LoginViewComponent,
    ForgotPasswordViewComponent,
  ],
  providers: [UserService],
})
export class AuthModule {}
