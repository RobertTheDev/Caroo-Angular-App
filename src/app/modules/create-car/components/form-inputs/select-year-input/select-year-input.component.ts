import { Component } from '@angular/core';

@Component({
  selector: 'app-select-year-input',
  templateUrl: './select-year-input.component.html',
  styleUrls: ['./select-year-input.component.css'],
})
export class SelectYearInputComponent {
  currentYear = new Date().getFullYear();
  years = Array.from(
    { length: this.currentYear - 1990 + 1 },
    (_, index) => this.currentYear - index,
  );
}
