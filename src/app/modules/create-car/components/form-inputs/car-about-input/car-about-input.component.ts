import { Component, OnInit } from '@angular/core';
import makeInputOptions from 'src/app/lib/carInputOptions/makeInputOptions';
import { NavigationService } from 'src/app/services/navigation/navigation.service';

@Component({
  selector: 'app-car-about-input',
  templateUrl: './car-about-input.component.html',
})
export class CarAboutInputComponent implements OnInit {
  constructor(private navigationService: NavigationService) {}

  years: number[] = [];

  makeInputOptions = makeInputOptions;

  ngOnInit(): void {
    const currentYear = new Date().getFullYear();
    for (let year = currentYear; year >= 1990; year--) {
      this.years.push(year);
    }
  }

  navigateNext() {
    this.navigationService.navigateTo('/sell-a-car/add-features');
  }

  navigateBack(): void {
    this.navigationService.navigateBack();
  }
}
