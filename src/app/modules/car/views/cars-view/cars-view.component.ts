import { Component, OnInit } from '@angular/core';
import ICar from 'models/car/types/Car';
import { CarService } from 'src/app/services/car/car.service';
import { MetaService } from 'src/app/services/meta/meta.service';

@Component({
  selector: 'app-cars-view',
  templateUrl: './cars-view.component.html',
  styleUrls: ['./cars-view.component.css'],
})
export class CarsViewComponent implements OnInit {
  cars: ICar[] = [];
  loading = true;
  errorMessage: string | null = null;

  constructor(
    private carService: CarService,
    private metaService: MetaService,
  ) {}

  ngOnInit() {
    this.metaService.setMeta(
      'Find Cars Near You',
      'This is the cars page.',
      'cars, vehicles, automotive, find cars',
      'cars',
    );

    this.carService.getCars().subscribe({
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
