import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SendPasswordResetPageComponent } from './views/send-password-reset-page/send-password-reset-page.component';
import { LoginViewComponent } from './views/login-view/login-view.component';
import { ResetPasswordViewComponent } from './views/reset-password-view/reset-password-view.component';
import { SignUpViewComponent } from './views/sign-up-view/sign-up-view.component';

const routes: Routes = [
  {
    path: 'forgot-password',
    component: SendPasswordResetPageComponent,
  },
  {
    path: 'login',
    component: LoginViewComponent,
  },
  {
    path: 'reset-password/:token',
    component: ResetPasswordViewComponent,
  },
  {
    path: 'sign-up',
    component: SignUpViewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
