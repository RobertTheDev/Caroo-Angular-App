import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarFeaturesInputComponent } from './car-features-input.component';

describe('CarFeaturesInputComponent', () => {
  let component: CarFeaturesInputComponent;
  let fixture: ComponentFixture<CarFeaturesInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarFeaturesInputComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CarFeaturesInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
