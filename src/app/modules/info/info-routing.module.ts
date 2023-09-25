import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutViewComponent } from './views/about-view/about-view.component';
import { AccessibilityStatementViewComponent } from './views/accessibility-statement-view/accessibility-statement-view.component';
import { CookiePolicyViewComponent } from './views/cookie-policy-view/cookie-policy-view.component';
import { PrivacyPolicyViewComponent } from './views/privacy-policy-view/privacy-policy-view.component';
import { TermsAndConditionsViewComponent } from './views/terms-and-conditions-view/terms-and-conditions-view.component';
import { HowItWorksViewComponent } from './views/how-it-works-view/how-it-works-view.component';

const routes: Routes = [
  { path: 'about', component: AboutViewComponent },
  {
    path: 'accessibility-statement',
    component: AccessibilityStatementViewComponent,
  },
  {
    path: 'cookie-policy',
    component: CookiePolicyViewComponent,
  },
  {
    path: 'how-it-works',
    component: HowItWorksViewComponent,
  },
  { path: 'privacy-policy', component: PrivacyPolicyViewComponent },
  {
    path: 'terms-and-conditions',
    component: TermsAndConditionsViewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoRoutingModule {}
