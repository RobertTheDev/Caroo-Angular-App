import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundViewComponent } from './modules/not-found/views/not-found-view/not-found-view.component';
import { SavedCarsViewComponent } from './modules/saved-car/views/saved-cars-view/saved-cars-view.component';
import { CarsViewComponent } from './modules/car/views/cars-view/cars-view.component';
import { SellerViewComponent } from './modules/seller/views/seller-view/seller-view.component';
import { AuthGuard } from './guards/auth/auth.guard';

const routes: Routes = [
  { path: '', component: CarsViewComponent },
  {
    path: '',

    loadChildren: () =>
      import('./modules/auth/auth-routing.module').then(
        (m) => m.AuthRoutingModule,
      ),
  },
  {
    path: '',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./modules/account/account-routing.module').then(
        (m) => m.AccountRoutingModule,
      ),
  },
  {
    path: '',
    loadChildren: () =>
      import('./modules/info/info-routing.module').then(
        (m) => m.InfoRoutingModule,
      ),
  },
  {
    path: '',
    loadChildren: () =>
      import('./modules/car-request/car-request-routing.module').then(
        (m) => m.CarRequestRoutingModule,
      ),
  },
  {
    path: '',
    loadChildren: () =>
      import('./modules/car/car-routing.module').then(
        (m) => m.CarRoutingModule,
      ),
  },
  {
    path: '',
    loadChildren: () =>
      import('./modules/profile/profile-routing.module').then(
        (m) => m.ProfileRoutingModule,
      ),
  },
  { path: 'saved-cars', component: SavedCarsViewComponent },
  { path: 'sellers/:emailAddress', component: SellerViewComponent },
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
