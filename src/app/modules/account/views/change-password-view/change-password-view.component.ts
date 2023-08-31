import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-change-password-view',
  templateUrl: './change-password-view.component.html',
})
export class ChangePasswordViewComponent implements OnInit {
  constructor(
    private meta: Meta,
    private title: Title,
  ) {}
  ngOnInit(): void {
    this.title.setTitle('Change Password | Caroo');

    this.meta.updateTag({
      name: 'description',
      content: '',
    });
  }
}
