import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-add-car-images-view',
  templateUrl: './add-car-images-view.component.html',
})
export class AddCarImagesViewComponent implements OnInit {
  constructor(
    private meta: Meta,
    private title: Title,
  ) {}
  ngOnInit(): void {
    this.title.setTitle('Add Car Listing Images | Caroo');

    this.meta.updateTag({
      name: 'description',
      content: '',
    });
  }
}
