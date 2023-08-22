import { Component } from '@angular/core';
import colourFilters from 'src/app/lib/carFilters/colourFilters';
import doorFilters from 'src/app/lib/carFilters/doorFilters';
import engineSizeFilters from 'src/app/lib/carFilters/engineSizeFilters';
import fuelTypeFilters from 'src/app/lib/carFilters/fuelTypeFilters';
import gearboxFilters from 'src/app/lib/carFilters/gearboxFilters';
import makeFilters from 'src/app/lib/carFilters/makeFilters';
import mileageFilters from 'src/app/lib/carFilters/mileageFilters';
import priceFilters from 'src/app/lib/carFilters/priceFilters';
import seatFilters from 'src/app/lib/carFilters/seatFilters';
import yearFilters from 'src/app/lib/carFilters/yearFilters';

@Component({
  selector: 'app-car-filter-menu',
  templateUrl: './car-filter-menu.component.html',
  styleUrls: ['./car-filter-menu.component.css'],
})
export class CarFilterMenuComponent {
  colourFilters = colourFilters;
  doorFilters = doorFilters;
  engineSizeFilters = engineSizeFilters;
  fuelTypeFilters = fuelTypeFilters;
  gearboxFilters = gearboxFilters;
  makeFilters = makeFilters;
  mileageFilters = mileageFilters;
  priceFilters = priceFilters;
  seatFilters = seatFilters;
  yearFilters = yearFilters;
}
