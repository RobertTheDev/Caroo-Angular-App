import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCarRequestViewComponent } from './update-car-request-view.component';

describe('UpdateCarRequestViewComponent', () => {
  let component: UpdateCarRequestViewComponent;
  let fixture: ComponentFixture<UpdateCarRequestViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateCarRequestViewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UpdateCarRequestViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
