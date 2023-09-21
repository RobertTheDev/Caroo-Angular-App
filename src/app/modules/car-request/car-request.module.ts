import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarRequestCardComponent } from './components/car-request-card/car-request-card.component';
import { CreateCarRequestFormComponent } from './components/create-car-request-form/create-car-request-form.component';

@NgModule({
  declarations: [CarRequestCardComponent, CreateCarRequestFormComponent],
  imports: [CommonModule],
})
export class CarRequestModule {}
