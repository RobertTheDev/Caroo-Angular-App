import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-not-found-view',
  templateUrl: './not-found-view.component.html',
  styleUrls: ['./not-found-view.component.css'],
})
export class NotFoundViewComponent implements OnInit {
  constructor(
    private meta: Meta,
    private title: Title,
  ) {}

  ngOnInit(): void {
    this.title.setTitle('Not Found | Caroo');

    this.meta.updateTag({
      name: 'description',
      content:
        "Lost in the journey? Unfortunately, the page you sought isn't here. Discover Caroo's world of vehicles and connections as you explore our platform.",
    });
  }
}
