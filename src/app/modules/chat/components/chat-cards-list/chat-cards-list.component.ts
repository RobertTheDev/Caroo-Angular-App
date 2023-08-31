import { Component } from '@angular/core';
import chatPreviews from '../../views/chat-view/chatPreviews';

@Component({
  selector: 'app-chat-cards-list',
  templateUrl: './chat-cards-list.component.html',
})
export class ChatCardsListComponent {
  chatPreviews = chatPreviews;
}
