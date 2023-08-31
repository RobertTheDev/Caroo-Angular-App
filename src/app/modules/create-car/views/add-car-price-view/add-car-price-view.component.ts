import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-add-car-price-view',
  templateUrl: './add-car-price-view.component.html',
})
export class AddCarPriceViewComponent implements OnInit {
  constructor(
    private meta: Meta,
    private title: Title,
  ) {}
  ngOnInit(): void {
    this.title.setTitle('Add Car Listing Price | Caroo');

    this.meta.updateTag({
      name: 'description',
      content: '',
    });
  }
}
