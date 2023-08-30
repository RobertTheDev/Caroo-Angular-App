import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarLocationInputComponent } from './car-location-input.component';

describe('CarLocationInputComponent', () => {
  let component: CarLocationInputComponent;
  let fixture: ComponentFixture<CarLocationInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarLocationInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarLocationInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
