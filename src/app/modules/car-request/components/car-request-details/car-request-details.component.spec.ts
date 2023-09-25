import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarRequestDetailsComponent } from './car-request-details.component';

describe('CarRequestDetailsComponent', () => {
  let component: CarRequestDetailsComponent;
  let fixture: ComponentFixture<CarRequestDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarRequestDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarRequestDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
