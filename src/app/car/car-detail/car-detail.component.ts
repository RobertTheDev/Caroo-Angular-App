import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from '@prisma/client';
import { CarService } from 'src/app/services/car/car.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css'],
})
export class CarDetailComponent implements OnInit {
  car: Car | null = null;
  loading = true;
  errorMessage: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private carService: CarService,
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.params['id'];

    this.carService.getCarById(id).subscribe({
      next: (data) => {
        this.loading = false;
        this.car = data.data;
      },
      error: (error) => {
        this.loading = false;
        this.errorMessage = error;
      },
    });
  }
}
