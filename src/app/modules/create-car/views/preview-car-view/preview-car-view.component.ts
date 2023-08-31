import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-preview-car-view',
  templateUrl: './preview-car-view.component.html',
})
export class PreviewCarViewComponent implements OnInit {
  constructor(
    private meta: Meta,
    private title: Title,
  ) {}
  ngOnInit(): void {
    this.title.setTitle('Preview Car Listing | Caroo');

    this.meta.updateTag({
      name: 'description',
      content: '',
    });
  }
}
