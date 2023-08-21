import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarsListComponent } from './car/cars-list/cars-list.component';
import { CarDetailComponent } from './car/car-detail/car-detail.component';
import { PrivacyPolicyComponent } from './info/privacy-policy/privacy-policy.component';
import { TermsAndConditionsComponent } from './info/terms-and-conditions/terms-and-conditions.component';
import { AccessibilityStatementComponent } from './info/accessibility-statement/accessibility-statement.component';
import { AboutComponent } from './info/about/about.component';

const routes: Routes = [
  { path: '', component: CarsListComponent },
  { path: 'cars', component: CarsListComponent },
  { path: 'cars/:id', component: CarDetailComponent },
  { path: 'about', component: AboutComponent },
  {
    path: 'accessibility-statement',
    component: AccessibilityStatementComponent,
  },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'terms-and-conditions', component: TermsAndConditionsComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
