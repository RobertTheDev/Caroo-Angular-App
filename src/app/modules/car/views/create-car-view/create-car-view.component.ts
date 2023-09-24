import { Component } from '@angular/core';
import companyName from 'src/app/lib/constants/companyName';

@Component({
  selector: 'app-create-car-view',
  templateUrl: './create-car-view.component.html',
})
export class CreateCarViewComponent {
  companyName = companyName;
}
