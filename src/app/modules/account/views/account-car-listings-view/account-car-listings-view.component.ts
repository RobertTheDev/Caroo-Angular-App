import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-account-car-listings-view',
  templateUrl: './account-car-listings-view.component.html',
})
export class AccountCarListingsViewComponent implements OnInit {
  constructor(
    private meta: Meta,
    private title: Title,
  ) {}
  ngOnInit(): void {
    this.title.setTitle('My Car Listings | Caroo');

    this.meta.updateTag({
      name: 'description',
      content: '',
    });
  }
}
