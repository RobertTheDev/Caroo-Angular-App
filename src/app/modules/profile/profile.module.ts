import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileViewComponent } from './views/profile-view/profile-view.component';
import { EditProfileViewComponent } from './views/edit-profile-view/edit-profile-view.component';
import { MyCarRequestsViewComponent } from './views/my-car-requests-view/my-car-requests-view.component';
import { MyCarListingsViewComponent } from './views/my-car-listings-view/my-car-listings-view.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ProfileViewComponent,
    EditProfileViewComponent,
    MyCarRequestsViewComponent,
    MyCarListingsViewComponent,
  ],
  imports: [CommonModule, RouterModule],
})
export class ProfileModule {}
