import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-close-account-view',
  templateUrl: './close-account-view.component.html',
})
export class CloseAccountViewComponent implements OnInit {
  constructor(
    private meta: Meta,
    private title: Title,
  ) {}
  ngOnInit(): void {
    this.title.setTitle('Close Account | Caroo');

    this.meta.updateTag({
      name: 'description',
      content: '',
    });
  }
}
