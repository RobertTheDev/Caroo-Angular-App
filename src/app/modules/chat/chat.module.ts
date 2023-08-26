import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatViewComponent } from './views/chat-view/chat-view.component';
import { ChatComponent } from './components/chat/chat.component';
import { ChatCardComponent } from './components/chat-card/chat-card.component';
import { ChatCardsListComponent } from './components/chat-cards-list/chat-cards-list.component';
import { ChatMessageInputComponent } from './components/chat-message-input/chat-message-input.component';

@NgModule({
  declarations: [
    ChatViewComponent,
    ChatComponent,
    ChatCardComponent,
    ChatCardsListComponent,
    ChatMessageInputComponent,
  ],
  imports: [CommonModule],
})
export class ChatModule {}
