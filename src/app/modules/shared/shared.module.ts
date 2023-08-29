import { NgModule } from '@angular/core';
import { DateDistanceToNowFormatPipe } from 'src/app/pipes/dateDistanceToNowFormat/date-distance-to-now-format.pipe';

@NgModule({
  declarations: [DateDistanceToNowFormatPipe],
  exports: [DateDistanceToNowFormatPipe],
})
export class SharedModule {}
