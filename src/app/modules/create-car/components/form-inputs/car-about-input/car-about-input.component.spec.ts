import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarAboutInputComponent } from './car-about-input.component';

describe('CarAboutInputComponent', () => {
  let component: CarAboutInputComponent;
  let fixture: ComponentFixture<CarAboutInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarAboutInputComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CarAboutInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
