import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-add-car-description-view',
  templateUrl: './add-car-description-view.component.html',
})
export class AddCarDescriptionViewComponent implements OnInit {
  constructor(
    private meta: Meta,
    private title: Title,
  ) {}
  ngOnInit(): void {
    this.title.setTitle('Add Car Listing Description | Caroo');

    this.meta.updateTag({
      name: 'description',
      content: '',
    });
  }
}
