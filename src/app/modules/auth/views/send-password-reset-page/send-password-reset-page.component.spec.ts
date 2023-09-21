import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendPasswordResetPageComponent } from './send-password-reset-page.component';

describe('SendPasswordResetPageComponent', () => {
  let component: SendPasswordResetPageComponent;
  let fixture: ComponentFixture<SendPasswordResetPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendPasswordResetPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SendPasswordResetPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
