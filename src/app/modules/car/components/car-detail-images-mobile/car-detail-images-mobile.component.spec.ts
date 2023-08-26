import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarDetailImagesMobileComponent } from './car-detail-images-mobile.component';

describe('CarDetailImagesMobileComponent', () => {
  let component: CarDetailImagesMobileComponent;
  let fixture: ComponentFixture<CarDetailImagesMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarDetailImagesMobileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarDetailImagesMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
