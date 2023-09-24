import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundViewComponent } from './modules/not-found/views/not-found-view/not-found-view.component';
import { SavedCarsViewComponent } from './modules/saved-car/views/saved-cars-view/saved-cars-view.component';
import { CarViewComponent } from './modules/car/views/car-view/car-view.component';
import { CarsViewComponent } from './modules/car/views/cars-view/cars-view.component';
import { EditCarViewComponent } from './modules/car/views/edit-car-view/edit-car-view.component';
import { FilterCarsViewComponent } from './modules/car/views/filter-cars-view/filter-cars-view.component';
import { AccessibilityStatementViewComponent } from './modules/info/views/accessibility-statement-view/accessibility-statement-view.component';
import { AboutViewComponent } from './modules/info/views/about-view/about-view.component';
import { PrivacyPolicyViewComponent } from './modules/info/views/privacy-policy-view/privacy-policy-view.component';
import { TermsAndConditionsViewComponent } from './modules/info/views/terms-and-conditions-view/terms-and-conditions-view.component';
import { CookiePolicyViewComponent } from './modules/info/views/cookie-policy-view/cookie-policy-view.component';
import { CreateCarViewComponent } from './modules/car/views/create-car-view/create-car-view.component';

const routes: Routes = [
  { path: '', component: FilterCarsViewComponent },
  { path: 'sell-a-car', component: CreateCarViewComponent },
  {
    path: '',
    loadChildren: () =>
      import('./modules/auth/auth-routing.module').then(
        (m) => m.AuthRoutingModule,
      ),
  },

  {
    path: 'cars',
    children: [
      { path: '', component: CarsViewComponent },
      { path: ':id', component: CarViewComponent },
      { path: ':id/edit', component: EditCarViewComponent },
    ],
  },

  { path: 'saved-cars', component: SavedCarsViewComponent },

  { path: 'about', component: AboutViewComponent },
  {
    path: 'accessibility-statement',
    component: AccessibilityStatementViewComponent,
  },
  {
    path: 'cookie-policy',
    component: CookiePolicyViewComponent,
  },
  { path: 'privacy-policy', component: PrivacyPolicyViewComponent },
  {
    path: 'terms-and-conditions',
    component: TermsAndConditionsViewComponent,
  },

  { path: '**', component: NotFoundViewComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking',
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
