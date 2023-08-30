import { Component } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation/navigation.service';

@Component({
  selector: 'app-create-car-view',
  templateUrl: './create-car-view.component.html',
  styleUrls: ['./create-car-view.component.css'],
})
export class CreateCarViewComponent {
  constructor(private navigationService: NavigationService) {}

  navigateNext() {
    this.navigationService.navigateTo('/sell-a-car/add-about');
  }

  navigateBack(): void {
    this.navigationService.navigateBack();
  }
}
