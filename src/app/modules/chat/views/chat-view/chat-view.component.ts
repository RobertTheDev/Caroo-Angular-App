import { Component } from '@angular/core';
import chatPreviews from './chatPreviews';

@Component({
  selector: 'app-chat-view',
  templateUrl: './chat-view.component.html',
  styleUrls: ['./chat-view.component.css'],
})
export class ChatViewComponent {
  chatPreviews = chatPreviews;
}
