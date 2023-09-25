import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarService } from '../../services/car/car.service';
import { RouterModule } from '@angular/router';
import { CarCreateFormComponent } from './components/car-create-form/car-create-form.component';
import { CarEditFormComponent } from './components/car-edit-form/car-edit-form.component';
import { CarsViewComponent } from './views/cars-view/cars-view.component';
import { CarViewComponent } from './views/car-view/car-view.component';
import { CreateCarViewComponent } from './views/create-car-view/create-car-view.component';
import { EditCarViewComponent } from './views/edit-car-view/edit-car-view.component';
import { CarCardComponent } from './components/car-card/car-card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    CarDetailComponent,
    CarCreateFormComponent,
    CarEditFormComponent,
    CarsViewComponent,
    CarViewComponent,
    CreateCarViewComponent,
    EditCarViewComponent,
    CarCardComponent,
  ],
  imports: [CommonModule, RouterModule, FontAwesomeModule, SharedModule],
  exports: [
    CarsViewComponent,
    CarViewComponent,
    CreateCarViewComponent,
    EditCarViewComponent,
  ],
  providers: [CarService],
})
export class CarModule {}
