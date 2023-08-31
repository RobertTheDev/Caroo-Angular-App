import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-add-car-location-view',
  templateUrl: './add-car-location-view.component.html',
})
export class AddCarLocationViewComponent implements OnInit {
  constructor(
    private meta: Meta,
    private title: Title,
  ) {}
  ngOnInit(): void {
    this.title.setTitle('Add Car Listing Location | Caroo');

    this.meta.updateTag({
      name: 'description',
      content: '',
    });
  }
}
