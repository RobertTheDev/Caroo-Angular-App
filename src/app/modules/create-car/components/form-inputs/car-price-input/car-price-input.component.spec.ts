import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarPriceInputComponent } from './car-price-input.component';

describe('CarPriceInputComponent', () => {
  let component: CarPriceInputComponent;
  let fixture: ComponentFixture<CarPriceInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarPriceInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarPriceInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
