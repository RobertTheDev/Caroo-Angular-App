import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundViewComponent } from './not-found-view/not-found-view.component';

@NgModule({
  declarations: [NotFoundViewComponent],
  imports: [CommonModule],
  exports: [NotFoundViewComponent],
})
export class NotFoundModule {}
