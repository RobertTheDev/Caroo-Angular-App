import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarDescriptionInputComponent } from './car-description-input.component';

describe('CarDescriptionInputComponent', () => {
  let component: CarDescriptionInputComponent;
  let fixture: ComponentFixture<CarDescriptionInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarDescriptionInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarDescriptionInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
