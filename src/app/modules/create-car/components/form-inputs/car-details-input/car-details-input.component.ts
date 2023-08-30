import { Component } from '@angular/core';
import conditionInputOptions from 'src/app/lib/carInputOptions/conditionInputOptions';
import fuelTypeInputOptions from 'src/app/lib/carInputOptions/fuelTypeInputOptions';
import gearboxInputOptions from 'src/app/lib/carInputOptions/gearboxInputOptions';
import { NavigationService } from 'src/app/services/navigation/navigation.service';

@Component({
  selector: 'app-car-details-input',
  templateUrl: './car-details-input.component.html',
})
export class CarDetailsInputComponent {
  constructor(private navigationService: NavigationService) {}

  navigateNext() {
    this.navigationService.navigateTo('sell-a-car/add-images');
  }

  navigateBack(): void {
    this.navigationService.navigateBack();
  }

  conditionInputOptions = conditionInputOptions;
  fuelTypeInputOptions = fuelTypeInputOptions;
  gearboxInputOptions = gearboxInputOptions;

  generateEngineSizes(start: number, end: number, increment: number) {
    const engineSizes = [];
    for (let size = start; size <= end; size += increment) {
      engineSizes.push(size.toFixed(1));
    }
    return engineSizes;
  }
}
