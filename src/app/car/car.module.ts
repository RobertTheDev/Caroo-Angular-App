import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarsListComponent } from './cars-list/cars-list.component';
import { CarDetailComponent } from './car-detail/car-detail.component';
import { CarService } from '../services/car/car.service';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CarsListComponent, CarDetailComponent],
  imports: [CommonModule, RouterModule],
  exports: [CarsListComponent, CarDetailComponent],
  providers: [CarService],
})
export class CarModule {}
