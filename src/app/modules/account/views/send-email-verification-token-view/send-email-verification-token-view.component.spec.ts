import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendEmailVerificationTokenViewComponent } from './send-email-verification-token-view.component';

describe('SendEmailVerificationTokenViewComponent', () => {
  let component: SendEmailVerificationTokenViewComponent;
  let fixture: ComponentFixture<SendEmailVerificationTokenViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SendEmailVerificationTokenViewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SendEmailVerificationTokenViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
