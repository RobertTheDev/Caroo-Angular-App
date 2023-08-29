import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyEmailViewComponent } from './verify-email-view.component';

describe('VerifyEmailViewComponent', () => {
  let component: VerifyEmailViewComponent;
  let fixture: ComponentFixture<VerifyEmailViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerifyEmailViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerifyEmailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
