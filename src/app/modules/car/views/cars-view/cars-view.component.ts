import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import ICar from 'models/car/types/Car';
import { CarService } from 'src/app/services/car/car.service';

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
    private meta: Meta,
    private title: Title,
  ) {}

  ngOnInit() {
    this.title.setTitle('Cars | Caroo');
    this.meta.updateTag({
      name: 'description',
      content: 'This is the cars page.',
    });

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
