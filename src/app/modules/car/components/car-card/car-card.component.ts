import { Component, Input } from '@angular/core';
import CarWithImage from 'src/app/types/CarWithImages';

@Component({
  selector: 'app-car-card',
  templateUrl: './car-card.component.html',
  styleUrls: ['./car-card.component.css'],
})
export class CarCardComponent {
  @Input() car: CarWithImage | undefined = undefined;
}
