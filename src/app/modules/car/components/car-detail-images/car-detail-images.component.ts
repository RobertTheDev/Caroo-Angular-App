import { Component, Input, OnInit } from '@angular/core';
import CarWithImages from 'src/app/types/CarWithImages';

@Component({
  selector: 'app-car-detail-images',
  templateUrl: './car-detail-images.component.html',
  styleUrls: ['./car-detail-images.component.css'],
})
export class CarDetailImagesComponent implements OnInit {
  @Input() car!: CarWithImages;
  carMainImageIndex = 0;
  carMainImage: { url: string; alt: string } | undefined; // Initialize the variable.

  ngOnInit() {
    // Check if the 'car' input is defined and has images before accessing the first image.
    if (this.car && this.car.images && this.car.images.length > 0) {
      this.carMainImage = this.car.images[this.carMainImageIndex];
    }
  }
  selectIndex(index: number) {
    this.carMainImageIndex = index;
    this.updateCarMainImage(); // Call the method to update the main image when a thumbnail is clicked.
  }

  updateCarMainImage() {
    if (this.car && this.car.images && this.car.images.length > 0) {
      this.carMainImage = this.car.images[this.carMainImageIndex];
    }
  }
}
