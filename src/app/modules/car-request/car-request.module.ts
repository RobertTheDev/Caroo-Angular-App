import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarRequestCardComponent } from './components/car-request-card/car-request-card.component';
import { CreateCarRequestFormComponent } from './components/create-car-request-form/create-car-request-form.component';
import { UpdateCarRequestFormComponent } from './components/update-car-request-form/update-car-request-form.component';
import { CarRequestListComponent } from './components/car-request-list/car-request-list.component';
import { CarRequestViewComponent } from './views/car-request-view/car-request-view.component';
import { CreateCarRequestViewComponent } from './views/create-car-request-view/create-car-request-view.component';
import { UpdateCarRequestViewComponent } from './views/update-car-request-view/update-car-request-view.component';
import { CarRequestDetailsComponent } from './components/car-request-details/car-request-details.component';

@NgModule({
  declarations: [
    CarRequestCardComponent,
    CreateCarRequestFormComponent,
    UpdateCarRequestFormComponent,
    CarRequestListComponent,
    CarRequestViewComponent,
    CreateCarRequestViewComponent,
    UpdateCarRequestViewComponent,
    CarRequestDetailsComponent,
  ],
  imports: [CommonModule],
})
export class CarRequestModule {}
