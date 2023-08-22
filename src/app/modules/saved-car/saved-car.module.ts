import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SavedCarsListComponent } from './components/saved-cars-list/saved-cars-list.component';
import { SavedCarsViewComponent } from './views/saved-cars-view/saved-cars-view.component';

@NgModule({
  declarations: [SavedCarsListComponent, SavedCarsViewComponent],
  imports: [CommonModule],
  exports: [SavedCarsViewComponent],
})
export class SavedCarModule {}
