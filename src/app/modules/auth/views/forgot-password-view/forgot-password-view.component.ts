import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-forgot-password-view',
  templateUrl: './forgot-password-view.component.html',
  styleUrls: ['./forgot-password-view.component.css'],
})
export class ForgotPasswordViewComponent implements OnInit {
  constructor(
    private meta: Meta,
    private title: Title,
  ) {}
  ngOnInit(): void {
    this.title.setTitle('Forgot Password | Caroo');

    this.meta.updateTag({
      name: 'description',
      content:
        'If you have forgotten your password - you can receive an email for a new password request by entering and submitting your email address below.',
    });
  }
}
