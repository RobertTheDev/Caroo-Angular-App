import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutViewComponent } from './views/about-view/about-view.component';
import { TermsAndConditionsViewComponent } from './views/terms-and-conditions-view/terms-and-conditions-view.component';
import { PrivacyPolicyViewComponent } from './views/privacy-policy-view/privacy-policy-view.component';
import { AccessibilityStatementViewComponent } from './views/accessibility-statement-view/accessibility-statement-view.component';
import { MarkdownModule } from 'ngx-markdown';
import { CookiePolicyViewComponent } from './views/cookie-policy-view/cookie-policy-view.component';

@NgModule({
  declarations: [
    PrivacyPolicyViewComponent,
    TermsAndConditionsViewComponent,
    AccessibilityStatementViewComponent,
    AboutViewComponent,
    CookiePolicyViewComponent,
  ],
  imports: [CommonModule, MarkdownModule.forRoot()],
  exports: [
    PrivacyPolicyViewComponent,
    TermsAndConditionsViewComponent,
    AccessibilityStatementViewComponent,
    AboutViewComponent,
  ],
})
export class InfoModule {}
