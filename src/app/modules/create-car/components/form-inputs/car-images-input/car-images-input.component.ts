import { Component } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation/navigation.service';

interface Image {
  url: string;
  file: File;
}

@Component({
  selector: 'app-car-images-input',
  templateUrl: './car-images-input.component.html',
  styleUrls: ['./car-images-input.component.css'],
})
export class CarImagesInputComponent {
  constructor(private navigationService: NavigationService) {}

  navigateNext() {
    this.navigationService.navigateTo('sell-a-car/add-description');
  }

  navigateBack(): void {
    this.navigationService.navigateBack();
  }

  selectedImages: Image[] = [];

  placeholderArray(): Image[] {
    return new Array(6);
  }

  deleteImage(index: number): void {
    const deletedImage = this.selectedImages.splice(index, 1)[0];
    URL.revokeObjectURL(deletedImage.url);
  }
}
