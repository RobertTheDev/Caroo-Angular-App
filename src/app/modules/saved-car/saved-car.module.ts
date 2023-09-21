import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SavedCarsViewComponent } from './views/saved-cars-view/saved-cars-view.component';

@NgModule({
  declarations: [SavedCarsViewComponent],
  imports: [CommonModule],
  exports: [SavedCarsViewComponent],
})
export class SavedCarModule {}
