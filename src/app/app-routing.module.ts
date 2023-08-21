import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarsListComponent } from './car/cars-list/cars-list.component';
import { CarDetailComponent } from './car/car-detail/car-detail.component';

const routes: Routes = [
  { path: '', component: CarsListComponent },
  { path: 'cars', component: CarsListComponent },
  { path: 'cars/:id', component: CarDetailComponent },
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
