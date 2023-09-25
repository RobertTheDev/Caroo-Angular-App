import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import ICar from 'models/car/types/Car';
import { CarService } from 'src/app/services/car/car.service';
import { MetaService } from 'src/app/services/meta/meta.service';

@Component({
  selector: 'app-car-view',
  templateUrl: './car-view.component.html',
})
export class CarViewComponent implements OnInit {
  constructor(
    private carService: CarService,
    private metaService: MetaService,
    private route: ActivatedRoute,
  ) {}

  car: ICar | null = null;

  ngOnInit() {
    const id = this.route.snapshot.params['id'];

    this.carService.getCarById(id).subscribe({
      next: (data) => {
        this.car = data.data;
      },
      error: (error) => {
        console.log(error.error);
      },
    });
  }
  //   const id = this.route.snapshot.params['id'];

  //   this.metaService.setMeta('Title', 'Description.', 'Keywords', 'Path');

  //   this.carService.getCarById(id).subscribe({
  //     next: (data) => {
  //       this.loading = false;
  //       this.car = data.data;

  //       if (this.car) {
  //         const { year, make, model } = this.car;

  //         this.title.setTitle(`${year} ${make} ${model} | Caroo`);

  //         this.meta.updateTag({
  //           name: 'description',
  //           content: `Buy a used ${make} ${model} from caroo. Explore a wide selection of high-quality, second-hand used cars for sale in your local area at Caroo. Find the perfect vehicle to meet your needs and budget. Start your car search with confidence at Caroo.`,
  //         });
  //       } else {
  //         this.title.setTitle(`Car | Caroo`);
  //         this.meta.updateTag({
  //           name: 'description',
  //           content: `Explore a wide selection of high-quality, second-hand used cars for sale in your local area at Caroo. Find the perfect vehicle to meet your needs and budget. Start your car search with confidence at Caroo.`,
  //         });
  //       }
  //     },
  //     error: (error) => {
  //       this.loading = false;
  //       this.errorMessage = error;
  //     },
  //   });
}
