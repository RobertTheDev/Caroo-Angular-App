import { Component } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation/navigation.service';

@Component({
  selector: 'app-car-description-input',
  templateUrl: './car-description-input.component.html',
  styleUrls: ['./car-description-input.component.css'],
})
export class CarDescriptionInputComponent {
  constructor(private navigationService: NavigationService) {}

  navigateNext() {
    this.navigationService.navigateTo('sell-a-car/add-location');
  }

  navigateBack(): void {
    this.navigationService.navigateBack();
  }
}
