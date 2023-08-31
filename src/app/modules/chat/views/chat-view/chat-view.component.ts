import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

import chatPreviews from './chatPreviews';

@Component({
  selector: 'app-chat-view',
  templateUrl: './chat-view.component.html',
  styleUrls: ['./chat-view.component.css'],
})
export class ChatViewComponent implements OnInit {
  constructor(
    private meta: Meta,
    private title: Title,
  ) {}
  ngOnInit(): void {
    this.title.setTitle('Chat | Caroo');

    this.meta.updateTag({
      name: 'description',
      content: '',
    });
  }

  chatPreviews = chatPreviews;
}
