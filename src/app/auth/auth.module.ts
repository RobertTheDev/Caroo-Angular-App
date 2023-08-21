import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { ProfileComponent } from './profile/profile.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../services/user/user.service';

@NgModule({
  declarations: [SignUpFormComponent, LoginFormComponent, ProfileComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [SignUpFormComponent, ProfileComponent],
  providers: [UserService],
})
export class AuthModule {}
