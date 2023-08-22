import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarOwnerListComponent } from './car-owner-list/car-owner-list.component';
import { AccountModule } from '../account/account.module';

@NgModule({
  declarations: [CarOwnerListComponent],
  imports: [CommonModule, AccountModule],
  exports: [CarOwnerListComponent],
})
export class CarOwnerModule {}
