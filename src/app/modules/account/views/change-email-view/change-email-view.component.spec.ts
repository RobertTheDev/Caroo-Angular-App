import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeEmailViewComponent } from './change-email-view.component';

describe('ChangeEmailViewComponent', () => {
  let component: ChangeEmailViewComponent;
  let fixture: ComponentFixture<ChangeEmailViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeEmailViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeEmailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
