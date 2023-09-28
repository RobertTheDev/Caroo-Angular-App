import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SavedCarsViewComponent } from './views/saved-cars-view/saved-cars-view.component';
import { SavedCarsListComponent } from './components/saved-cars-list/saved-cars-list.component';
import { CarModule } from '../car/car.module';
import { SavedCarService } from 'src/app/services/savedCar/saved-car.service';

@NgModule({
  declarations: [SavedCarsViewComponent, SavedCarsListComponent],
  imports: [CommonModule, CarModule],
  exports: [SavedCarsViewComponent],
  providers: [SavedCarService],
})
export class SavedCarModule {}
