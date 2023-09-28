import { Component, OnInit } from '@angular/core';
import ISavedCar from 'models/savedCar/types/SavedCar';
import { MetaService } from 'src/app/services/meta/meta.service';
import { SavedCarService } from 'src/app/services/savedCar/saved-car.service';

@Component({
  selector: 'app-saved-cars-view',
  templateUrl: './saved-cars-view.component.html',
})
export class SavedCarsViewComponent implements OnInit {
  savedCars: ISavedCar[] = [];
  loading = true;
  errorMessage: string | null = null;

  constructor(
    private metaService: MetaService,
    private savedCarService: SavedCarService,
  ) {}

  ngOnInit() {
    this.metaService.setMeta(
      'Saved Cars',
      'Description.',
      'Keywords',
      'saved-cars',
    );

    return this.savedCarService.getSavedCars().subscribe({
      next: (data) => {
        this.loading = false;
        this.savedCars = data.data;
      },
      error: (error) => {
        this.loading = false;
        this.errorMessage = error;
      },
    });
  }
}
