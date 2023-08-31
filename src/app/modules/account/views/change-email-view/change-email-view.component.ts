import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-change-email-view',
  templateUrl: './change-email-view.component.html',
})
export class ChangeEmailViewComponent implements OnInit {
  constructor(
    private meta: Meta,
    private title: Title,
  ) {}
  ngOnInit(): void {
    this.title.setTitle('Change Email | Caroo');

    this.meta.updateTag({
      name: 'description',
      content: '',
    });
  }
}
