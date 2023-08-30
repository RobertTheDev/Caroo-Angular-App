import { Component, OnInit } from '@angular/core';
import makeInputOptions from 'src/app/lib/carInputOptions/makeInputOptions';

@Component({
  selector: 'app-car-about-input',
  templateUrl: './car-about-input.component.html',
  styleUrls: ['./car-about-input.component.css'],
})
export class CarAboutInputComponent implements OnInit {
  years: number[] = [];

  makeInputOptions = makeInputOptions;

  ngOnInit(): void {
    const currentYear = new Date().getFullYear();
    for (let year = currentYear; year >= 1990; year--) {
      this.years.push(year);
    }
  }
}
