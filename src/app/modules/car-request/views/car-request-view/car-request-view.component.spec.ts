import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarRequestViewComponent } from './car-request-view.component';

describe('CarRequestViewComponent', () => {
  let component: CarRequestViewComponent;
  let fixture: ComponentFixture<CarRequestViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarRequestViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarRequestViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
