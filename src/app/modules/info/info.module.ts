import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutViewComponent } from './views/about-view/about-view.component';
import { TermsAndConditionsViewComponent } from './views/terms-and-conditions-view/terms-and-conditions-view.component';
import { PrivacyPolicyViewComponent } from './views/privacy-policy-view/privacy-policy-view.component';
import { AccessibilityStatementViewComponent } from './views/accessibility-statement-view/accessibility-statement-view.component';
import { MarkdownModule } from 'ngx-markdown';
import { CookiePolicyViewComponent } from './views/cookie-policy-view/cookie-policy-view.component';
import { InfoPageLoaderComponent } from './components/info-page-loader/info-page-loader.component';
import { InfoPageErrorComponent } from './components/info-page-error/info-page-error.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    PrivacyPolicyViewComponent,
    TermsAndConditionsViewComponent,
    AccessibilityStatementViewComponent,
    AboutViewComponent,
    CookiePolicyViewComponent,
    InfoPageLoaderComponent,
    InfoPageErrorComponent,
  ],
  imports: [CommonModule, MarkdownModule.forRoot(), FontAwesomeModule],
  exports: [
    PrivacyPolicyViewComponent,
    TermsAndConditionsViewComponent,
    AccessibilityStatementViewComponent,
    AboutViewComponent,
  ],
})
export class InfoModule {}
