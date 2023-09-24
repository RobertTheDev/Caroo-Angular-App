import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyEmailWithTokenViewComponent } from './verify-email-with-token-view.component';

describe('VerifyEmailWithTokenViewComponent', () => {
  let component: VerifyEmailWithTokenViewComponent;
  let fixture: ComponentFixture<VerifyEmailWithTokenViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerifyEmailWithTokenViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerifyEmailWithTokenViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
