import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-sign-up-view',
  templateUrl: './sign-up-view.component.html',
})
export class SignUpViewComponent implements OnInit {
  constructor(
    private meta: Meta,
    private title: Title,
  ) {}
  ngOnInit(): void {
    this.title.setTitle('Sign Up | Caroo');

    this.meta.updateTag({
      name: 'description',
      content:
        'Enter your email, name and password to sign up for an account on Caroo. Your password must be at least eight characters long with at least one number, capital letter and special character.',
    });
  }
}
