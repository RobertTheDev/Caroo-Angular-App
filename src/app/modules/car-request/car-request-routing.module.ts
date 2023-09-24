import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCarRequestViewComponent } from './views/create-car-request-view/create-car-request-view.component';
import { UpdateCarRequestViewComponent } from './views/update-car-request-view/update-car-request-view.component';

const routes: Routes = [
  { path: ':carId/request-car', component: CreateCarRequestViewComponent },
  { path: ':id/update-car-request', component: UpdateCarRequestViewComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarRequestRoutingModule {}
