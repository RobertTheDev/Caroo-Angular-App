import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { AccessibilityStatementComponent } from './accessibility-statement/accessibility-statement.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    PrivacyPolicyComponent,
    TermsAndConditionsComponent,
    AccessibilityStatementComponent,
    AboutComponent,
  ],
  imports: [CommonModule],
  exports: [
    PrivacyPolicyComponent,
    TermsAndConditionsComponent,
    AccessibilityStatementComponent,
    AboutComponent,
  ],
})
export class InfoModule {}
