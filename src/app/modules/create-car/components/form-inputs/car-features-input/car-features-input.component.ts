import { Component } from '@angular/core';
import colourInputOptions from 'src/app/lib/carInputOptions/colourInputOptions';

@Component({
  selector: 'app-car-features-input',
  templateUrl: './car-features-input.component.html',
  styleUrls: ['./car-features-input.component.css'],
})
export class CarFeaturesInputComponent {
  colourInputOptions = colourInputOptions;

  generateDoorOptions(start: number, end: number) {
    const doorOptions = [];
    for (let doorsNumber = start; doorsNumber <= end; doorsNumber++) {
      doorOptions.push({ name: `${doorsNumber} doors`, value: doorsNumber });
    }
    return doorOptions;
  }

  generateSeatOptions(start: number, end: number) {
    const seatOptions = [];
    for (let seatsNumber = start; seatsNumber <= end; seatsNumber++) {
      seatOptions.push({ name: `${seatsNumber} seats`, value: seatsNumber });
    }
    return seatOptions;
  }
}
