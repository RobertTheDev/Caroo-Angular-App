import { Component } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation/navigation.service';

@Component({
  selector: 'app-create-car-preview',
  templateUrl: './create-car-preview.component.html',
})
export class CreateCarPreviewComponent {
  constructor(private navigationService: NavigationService) {}

  navigateNext() {
    this.navigationService.navigateTo('/');
  }

  navigateBack(): void {
    this.navigationService.navigateBack();
  }
}
