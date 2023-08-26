import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { CarService } from 'src/app/services/car/car.service';
import CarWithImage from 'src/app/types/CarWithImages';
import { formatDistanceToNow } from 'date-fns';
import priceUnits from 'src/app/lib/units/priceUnits';
import { faHeart, faMessage } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css'],
})
export class CarDetailComponent implements OnInit {
  car: CarWithImage | null = null;
  loading = true;
  errorMessage: string | null = null;
  priceUnits = priceUnits;

  faHeart = faHeart;
  faMessage = faMessage;

  constructor(
    private meta: Meta,
    private title: Title,
    private route: ActivatedRoute,
    private carService: CarService,
  ) {}

  formatDistance(date: Date) {
    return formatDistanceToNow(date, { addSuffix: true });
  }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];

    this.carService.getCarById(id).subscribe({
      next: (data) => {
        this.loading = false;
        this.car = data.data;

        if (this.car) {
          const { year, make, model } = this.car;

          this.title.setTitle(`${year} ${make} ${model} | Caroo`);

          this.meta.updateTag({
            name: 'description',
            content: `Buy a used ${make} ${model} from caroo. Explore a wide selection of high-quality, second-hand used cars for sale in your local area at Caroo. Find the perfect vehicle to meet your needs and budget. Start your car search with confidence at Caroo.`,
          });
        } else {
          this.title.setTitle(`Car | Caroo`);
          this.meta.updateTag({
            name: 'description',
            content: `Explore a wide selection of high-quality, second-hand used cars for sale in your local area at Caroo. Find the perfect vehicle to meet your needs and budget. Start your car search with confidence at Caroo.`,
          });
        }
      },
      error: (error) => {
        this.loading = false;
        this.errorMessage = error;
      },
    });
  }
}
