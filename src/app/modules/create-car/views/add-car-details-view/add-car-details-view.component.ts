import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-add-car-details-view',
  templateUrl: './add-car-details-view.component.html',
})
export class AddCarDetailsViewComponent implements OnInit {
  constructor(
    private meta: Meta,
    private title: Title,
  ) {}
  ngOnInit(): void {
    this.title.setTitle('Add Car Listing Details | Caroo');

    this.meta.updateTag({
      name: 'description',
      content: '',
    });
  }
}
