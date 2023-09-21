import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpFormComponent } from './components/sign-up-form/sign-up-form.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../services/user/user.service';
import { SignUpViewComponent } from './views/sign-up-view/sign-up-view.component';
import { LoginViewComponent } from './views/login-view/login-view.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    SignUpFormComponent,
    LoginFormComponent,

    SignUpViewComponent,
    LoginViewComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  exports: [SignUpViewComponent, LoginViewComponent],
  providers: [UserService],
})
export class AuthModule {}
