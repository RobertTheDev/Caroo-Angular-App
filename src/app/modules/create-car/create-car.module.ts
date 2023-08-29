import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateCarPreviewComponent } from './components/create-car-preview/create-car-preview.component';
import { CreateCarViewComponent } from './views/create-car-view/create-car-view.component';
import { CreateCarFormComponent } from './components/create-car-form/create-car-form.component';
import { CarImagesInputComponent } from './components/form-inputs/car-images-input/car-images-input.component';
import { CarDetailsInputComponent } from './components/form-inputs/car-details-input/car-details-input.component';
import { CarPriceInputComponent } from './components/form-inputs/car-price-input/car-price-input.component';
import { CarFeaturesInputComponent } from './components/form-inputs/car-features-input/car-features-input.component';
import { CarDescriptionInputComponent } from './components/form-inputs/car-description-input/car-description-input.component';
import { CarAboutInputComponent } from './components/form-inputs/car-about-input/car-about-input.component';

@NgModule({
  declarations: [
    CreateCarPreviewComponent,
    CreateCarViewComponent,
    CreateCarFormComponent,
    CarImagesInputComponent,
    CarDetailsInputComponent,
    CarPriceInputComponent,
    CarFeaturesInputComponent,
    CarDescriptionInputComponent,
    CarAboutInputComponent,
  ],
  imports: [CommonModule],
})
export class CreateCarModule {}
