import { Component, OnInit } from '@angular/core';
import { Car } from '@prisma/client';
import { CarService } from 'src/app/services/car/car.service';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css'],
})
export class CarsListComponent implements OnInit {
  cars: Car[] = [];

  constructor(private carService: CarService) {}

  ngOnInit() {
    this.carService.getCars().subscribe((data) => {
      this.cars = data.data;
    });
  }
}
