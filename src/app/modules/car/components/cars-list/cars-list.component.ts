import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { CarService } from 'src/app/services/car/car.service';
import CarWithImage from 'src/app/types/CarWithImages';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css'],
})
export class CarsListComponent implements OnInit {
  cars: CarWithImage[] = [];
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
