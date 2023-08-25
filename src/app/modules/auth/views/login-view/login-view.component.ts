import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.css'],
})
export class LoginViewComponent implements OnInit {
  constructor(
    private meta: Meta,
    private title: Title,
  ) {}
  ngOnInit(): void {
    this.title.setTitle('Login | Caroo');

    this.meta.updateTag({
      name: 'description',
      content:
        'Login to your account by entering and submitting your email address and password below. If you do not have an account you can sign up on Caroo by clicking the sign up link.',
    });
  }
}
