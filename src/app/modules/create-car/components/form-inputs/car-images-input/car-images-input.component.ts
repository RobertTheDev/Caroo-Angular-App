import { Component } from '@angular/core';

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
  selectedImages: Image[] = [];

  placeholderArray(): any[] {
    return new Array(6);
  }

  onFileSelected(event: any, index: number): void {
    const file: File = event.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    this.selectedImages[index] = { url: imageUrl, file };
  }

  deleteImage(index: number): void {
    const deletedImage = this.selectedImages.splice(index, 1)[0];
    URL.revokeObjectURL(deletedImage.url);
  }
}
