import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-add-car-features-view',
  templateUrl: './add-car-features-view.component.html',
})
export class AddCarFeaturesViewComponent implements OnInit {
  constructor(
    private meta: Meta,
    private title: Title,
  ) {}
  ngOnInit(): void {
    this.title.setTitle('Add Car Listing Features | Caroo');

    this.meta.updateTag({
      name: 'description',
      content: '',
    });
  }
}
