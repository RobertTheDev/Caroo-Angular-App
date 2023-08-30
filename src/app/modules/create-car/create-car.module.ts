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
import { FormsModule } from '@angular/forms';
import { PreviewCarViewComponent } from './views/preview-car-view/preview-car-view.component';
import { AddCarAboutViewComponent } from './views/add-car-about-view/add-car-about-view.component';
import { AddCarDescriptionViewComponent } from './views/add-car-description-view/add-car-description-view.component';
import { AddCarDetailsViewComponent } from './views/add-car-details-view/add-car-details-view.component';
import { AddCarFeaturesViewComponent } from './views/add-car-features-view/add-car-features-view.component';
import { AddCarImagesViewComponent } from './views/add-car-images-view/add-car-images-view.component';
import { AddCarPriceViewComponent } from './views/add-car-price-view/add-car-price-view.component';
import { AddCarLocationViewComponent } from './views/add-car-location-view/add-car-location-view.component';
import { CarLocationInputComponent } from './components/form-inputs/car-location-input/car-location-input.component';

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
    PreviewCarViewComponent,
    AddCarAboutViewComponent,
    AddCarDescriptionViewComponent,
    AddCarDetailsViewComponent,
    AddCarFeaturesViewComponent,
    AddCarImagesViewComponent,
    AddCarPriceViewComponent,
    AddCarLocationViewComponent,
    CarLocationInputComponent,
  ],
  imports: [CommonModule, FormsModule],
})
export class CreateCarModule {}
