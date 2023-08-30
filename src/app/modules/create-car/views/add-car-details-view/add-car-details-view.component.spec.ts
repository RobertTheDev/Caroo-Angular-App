import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCarDetailsViewComponent } from './add-car-details-view.component';

describe('AddCarDetailsViewComponent', () => {
  let component: AddCarDetailsViewComponent;
  let fixture: ComponentFixture<AddCarDetailsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCarDetailsViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCarDetailsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
