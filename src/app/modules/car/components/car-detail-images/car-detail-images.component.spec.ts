import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarDetailImagesComponent } from './car-detail-images.component';

describe('CarDetailImagesComponent', () => {
  let component: CarDetailImagesComponent;
  let fixture: ComponentFixture<CarDetailImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarDetailImagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarDetailImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
