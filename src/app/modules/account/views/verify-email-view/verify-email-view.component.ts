import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-verify-email-view',
  templateUrl: './verify-email-view.component.html',
})
export class VerifyEmailViewComponent implements OnInit {
  constructor(
    private meta: Meta,
    private title: Title,
  ) {}
  ngOnInit(): void {
    this.title.setTitle('Verify Email | Caroo');

    this.meta.updateTag({
      name: 'description',
      content: '',
    });
  }
}
