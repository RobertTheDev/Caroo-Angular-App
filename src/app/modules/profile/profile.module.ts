import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileViewComponent } from './views/profile-view/profile-view.component';
import { EditProfileViewComponent } from './views/edit-profile-view/edit-profile-view.component';
import { MyCarRequestsViewComponent } from './views/my-car-requests-view/my-car-requests-view.component';
import { MyCarListingsViewComponent } from './views/my-car-listings-view/my-car-listings-view.component';
import { RouterModule } from '@angular/router';
import { UpdateProfileFormComponent } from './components/update-profile-form/update-profile-form.component';
import { ProfileDetailsComponent } from './components/profile-details/profile-details.component';
import { ProfileService } from 'src/app/services/profile/profile.service';
import { ReactiveFormsModule } from '@angular/forms';
import { CarService } from 'src/app/services/car/car.service';
import { CarModule } from '../car/car.module';

@NgModule({
  declarations: [
    ProfileViewComponent,
    EditProfileViewComponent,
    MyCarRequestsViewComponent,
    MyCarListingsViewComponent,
    UpdateProfileFormComponent,
    ProfileDetailsComponent,
  ],
  imports: [CommonModule, RouterModule, ReactiveFormsModule, CarModule],
  providers: [ProfileService, CarService],
})
export class ProfileModule {}
