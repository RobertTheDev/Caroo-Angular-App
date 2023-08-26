import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatCardsListComponent } from './chat-cards-list.component';

describe('ChatCardsListComponent', () => {
  let component: ChatCardsListComponent;
  let fixture: ComponentFixture<ChatCardsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChatCardsListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ChatCardsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
