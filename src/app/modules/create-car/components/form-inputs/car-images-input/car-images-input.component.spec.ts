import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarImagesInputComponent } from './car-images-input.component';

describe('CarImagesInputComponent', () => {
  let component: CarImagesInputComponent;
  let fixture: ComponentFixture<CarImagesInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarImagesInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarImagesInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
