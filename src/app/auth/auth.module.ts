import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../services/user/user.service';
import { ForgotPasswordFormComponent } from './forgot-password-form/forgot-password-form.component';

@NgModule({
  declarations: [
    SignUpFormComponent,
    LoginFormComponent,
    ForgotPasswordFormComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [SignUpFormComponent],
  providers: [UserService],
})
export class AuthModule {}
