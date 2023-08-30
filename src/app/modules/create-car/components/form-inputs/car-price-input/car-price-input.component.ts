import { Component } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation/navigation.service';

@Component({
  selector: 'app-car-price-input',
  templateUrl: './car-price-input.component.html',
})
export class CarPriceInputComponent {
  constructor(private navigationService: NavigationService) {}

  navigateNext() {
    this.navigationService.navigateTo('/sell-a-car/preview');
  }

  navigateBack(): void {
    this.navigationService.navigateBack();
  }
}
