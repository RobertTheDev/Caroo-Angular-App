import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarsListComponent } from './cars-list/cars-list.component';
import { CarDetailComponent } from './car-detail/car-detail.component';
import { CarService } from '../../services/car/car.service';
import { RouterModule } from '@angular/router';
import { CarFilterMenuComponent } from './car-filter-menu/car-filter-menu.component';
import { CarFilterListComponent } from './car-filter-list/car-filter-list.component';
import { CarCreateFormComponent } from './car-create-form/car-create-form.component';
import { CarEditFormComponent } from './car-edit-form/car-edit-form.component';

@NgModule({
  declarations: [
    CarsListComponent,
    CarDetailComponent,
    CarFilterMenuComponent,
    CarFilterListComponent,
    CarCreateFormComponent,
    CarEditFormComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [CarsListComponent, CarDetailComponent],
  providers: [CarService],
})
export class CarModule {}
