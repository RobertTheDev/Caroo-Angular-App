import { Component, OnInit } from '@angular/core';
import ICar from 'models/car/types/Car';
import { CarService } from 'src/app/services/car/car.service';
import { MetaService } from 'src/app/services/meta/meta.service';

@Component({
  selector: 'app-my-car-listings-view',
  templateUrl: './my-car-listings-view.component.html',
})
export class MyCarListingsViewComponent implements OnInit {
  cars: ICar[] = [];
  loading = true;
  errorMessage: string | null = null;

  constructor(
    private metaService: MetaService,
    private carService: CarService,
  ) {}

  ngOnInit() {
    this.metaService.setMeta(
      'My Car Listings',
      'Description.',
      'Keywords',
      'my-car-listings',
    );

    this.carService.getCarsByAuthenticatedUser().subscribe({
      next: (data) => {
        this.loading = false;
        this.cars = data.data;
      },
      error: (error) => {
        this.loading = false;
        this.errorMessage = error;
      },
    });
  }
}
