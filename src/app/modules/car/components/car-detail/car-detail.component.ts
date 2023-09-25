import { Component, Input } from '@angular/core';
import { formatDistanceToNow } from 'date-fns';
import priceUnits from 'src/app/lib/units/priceUnits';
import { faHeart, faMessage } from '@fortawesome/free-regular-svg-icons';
import ICar from 'models/car/types/Car';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css'],
})
export class CarDetailComponent {
  @Input() car: ICar | undefined = undefined;
  loading = true;
  errorMessage: string | null = null;
  priceUnits = priceUnits;

  faHeart = faHeart;
  faMessage = faMessage;

  formatDistance(date: Date) {
    return formatDistanceToNow(date, { addSuffix: true });
  }
}
