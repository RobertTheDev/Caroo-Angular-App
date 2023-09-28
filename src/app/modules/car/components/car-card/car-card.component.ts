import { Component, Input } from '@angular/core';
import ICar from 'models/car/types/Car';
import { SavedCarService } from 'src/app/services/savedCar/saved-car.service';

@Component({
  selector: 'app-car-card',
  templateUrl: './car-card.component.html',
  styleUrls: ['./car-card.component.css'],
})
export class CarCardComponent {
  @Input() car: ICar | undefined = undefined;

  constructor(private savedCarService: SavedCarService) {}

  saveCar(event: Event, id: string) {
    event.stopPropagation();
    event.preventDefault();

    return this.savedCarService.createSavedCar(id).subscribe({
      // If form has successfully handled login - stop the form loading and navigate to home page.
      next: (data) => {
        console.log(data);
      },
      // If an error contain the error message in the variable. Stop form loading.
      error: (error) => {
        console.error(error);
      },
    });
  }
}
