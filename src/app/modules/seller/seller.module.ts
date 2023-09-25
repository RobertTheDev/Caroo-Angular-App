import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SellerViewComponent } from './views/seller-view/seller-view.component';
import { SellerDetailsComponent } from './components/seller-details/seller-details.component';



@NgModule({
  declarations: [
    SellerViewComponent,
    SellerDetailsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SellerModule { }
