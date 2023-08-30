import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCarPriceViewComponent } from './add-car-price-view.component';

describe('AddCarPriceViewComponent', () => {
  let component: AddCarPriceViewComponent;
  let fixture: ComponentFixture<AddCarPriceViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCarPriceViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCarPriceViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
