import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-add-car-about-view',
  templateUrl: './add-car-about-view.component.html',
})
export class AddCarAboutViewComponent implements OnInit {
  constructor(
    private meta: Meta,
    private title: Title,
  ) {}
  ngOnInit(): void {
    this.title.setTitle('Add Car Listing About | Caroo');

    this.meta.updateTag({
      name: 'description',
      content: '',
    });
  }
}
