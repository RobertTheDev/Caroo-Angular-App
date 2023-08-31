import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-account-profile-view',
  templateUrl: './account-profile-view.component.html',
})
export class AccountProfileViewComponent implements OnInit {
  constructor(
    private meta: Meta,
    private title: Title,
  ) {}
  ngOnInit(): void {
    this.title.setTitle('Profile | Caroo');

    this.meta.updateTag({
      name: 'description',
      content: '',
    });
  }
}
