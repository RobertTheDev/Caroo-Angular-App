import { Component, Input } from '@angular/core';
import ICar from 'models/car/types/Car';

@Component({
  selector: 'app-car-card',
  templateUrl: './car-card.component.html',
  styleUrls: ['./car-card.component.css'],
})
export class CarCardComponent {
  @Input() car: ICar | undefined = undefined;
}
