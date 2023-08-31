import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-saved-cars-view',
  templateUrl: './saved-cars-view.component.html',
})
export class SavedCarsViewComponent implements OnInit {
  constructor(
    private meta: Meta,
    private title: Title,
  ) {}
  ngOnInit(): void {
    this.title.setTitle('Saved Cars | Caroo');

    this.meta.updateTag({
      name: 'description',
      content: '',
    });
  }
}
