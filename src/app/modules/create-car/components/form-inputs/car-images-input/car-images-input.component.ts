import { Component } from '@angular/core';

@Component({
  selector: 'app-car-images-input',
  templateUrl: './car-images-input.component.html',
  styleUrls: ['./car-images-input.component.css'],
})
export class CarImagesInputComponent {
  images: string[] = new Array(6).fill('');

  replaceImage(index: number) {
    // Handle replacing the image at the specified index
    const newImageUrl = prompt('Enter image URL:');
    if (newImageUrl) {
      this.images[index] = newImageUrl;
    }
  }

  deleteImage(index: number) {
    // Handle deleting the image at the specified index
    this.images[index] = '';
  }

  uploadImage(event: any, index: number) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.images[index] = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }
}
