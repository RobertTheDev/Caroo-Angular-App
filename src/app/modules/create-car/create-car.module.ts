import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateCarImagesComponent } from './components/create-car-images/create-car-images.component';
import { CreateCarPreviewComponent } from './components/create-car-preview/create-car-preview.component';
import { CreateCarViewComponent } from './views/create-car-view/create-car-view.component';
import { CreateCarFormComponent } from './components/create-car-form/create-car-form.component';
import { SelectYearInputComponent } from './components/form-inputs/select-year-input/select-year-input.component';

@NgModule({
  declarations: [
    CreateCarFormComponent,
    CreateCarViewComponent,
    CreateCarPreviewComponent,
    CreateCarImagesComponent,
    SelectYearInputComponent,
  ],
  imports: [CommonModule],
})
export class CreateCarModule {}
