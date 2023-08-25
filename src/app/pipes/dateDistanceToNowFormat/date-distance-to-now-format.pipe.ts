import { Pipe, PipeTransform } from '@angular/core';
import { formatDistanceToNow } from 'date-fns';

@Pipe({
  name: 'dateDistanceToNowFormat',
})
export class DateDistanceToNowFormatPipe implements PipeTransform {
  transform(date: Date): string | null {
    if (!date) return null;

    return formatDistanceToNow(new Date(date), { addSuffix: true });
  }
}
