import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SavedCarsViewComponent } from './views/saved-cars-view/saved-cars-view.component';
import { SavedCarsListComponent } from './components/saved-cars-list/saved-cars-list.component';

@NgModule({
  declarations: [SavedCarsViewComponent, SavedCarsListComponent],
  imports: [CommonModule],
  exports: [SavedCarsViewComponent],
})
export class SavedCarModule {}
