import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarsListComponent } from './components/cars-list/cars-list.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarService } from '../../services/car/car.service';
import { RouterModule } from '@angular/router';
import { CarFilterMenuComponent } from './components/car-filter-menu/car-filter-menu.component';
import { CarFilterListComponent } from './components/car-filter-list/car-filter-list.component';
import { CarCreateFormComponent } from './components/car-create-form/car-create-form.component';
import { CarEditFormComponent } from './components/car-edit-form/car-edit-form.component';
import { CarsViewComponent } from './views/cars-view/cars-view.component';
import { CarViewComponent } from './views/car-view/car-view.component';
import { CreateCarViewComponent } from './views/create-car-view/create-car-view.component';
import { EditCarViewComponent } from './views/edit-car-view/edit-car-view.component';
import { FilterCarsViewComponent } from './views/filter-cars-view/filter-cars-view.component';

@NgModule({
  declarations: [
    CarsListComponent,
    CarDetailComponent,
    CarFilterMenuComponent,
    CarFilterListComponent,
    CarCreateFormComponent,
    CarEditFormComponent,
    CarsViewComponent,
    CarViewComponent,
    CreateCarViewComponent,
    EditCarViewComponent,
    FilterCarsViewComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    CarsViewComponent,
    CarViewComponent,
    CreateCarViewComponent,
    EditCarViewComponent,
    FilterCarsViewComponent,
  ],
  providers: [CarService],
})
export class CarModule {}
