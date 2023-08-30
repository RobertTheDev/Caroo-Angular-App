import { Component } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation/navigation.service';

@Component({
  selector: 'app-car-location-input',
  templateUrl: './car-location-input.component.html',
})
export class CarLocationInputComponent {
  constructor(private navigationService: NavigationService) {}

  navigateNext() {
    this.navigationService.navigateTo('sell-a-car/add-price');
  }

  navigateBack(): void {
    this.navigationService.navigateBack();
  }
}
