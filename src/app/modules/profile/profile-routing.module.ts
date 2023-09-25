import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileViewComponent } from './views/profile-view/profile-view.component';
import { EditProfileViewComponent } from './views/edit-profile-view/edit-profile-view.component';
import { MyCarListingsViewComponent } from './views/my-car-listings-view/my-car-listings-view.component';
import { MyCarRequestsViewComponent } from './views/my-car-requests-view/my-car-requests-view.component';

const routes: Routes = [
  { path: 'profile', component: ProfileViewComponent },
  {
    path: 'edit-profile',
    component: EditProfileViewComponent,
  },
  {
    path: 'my-car-requests',
    component: MyCarRequestsViewComponent,
  },
  {
    path: 'my-car-listings',
    component: MyCarListingsViewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule {}
