import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendEmailVerificationTokenFormComponent } from './send-email-verification-token-form.component';

describe('SendEmailVerificationTokenFormComponent', () => {
  let component: SendEmailVerificationTokenFormComponent;
  let fixture: ComponentFixture<SendEmailVerificationTokenFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SendEmailVerificationTokenFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SendEmailVerificationTokenFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
