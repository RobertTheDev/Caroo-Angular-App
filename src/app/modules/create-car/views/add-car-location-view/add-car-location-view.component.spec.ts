import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCarLocationViewComponent } from './add-car-location-view.component';

describe('AddCarLocationViewComponent', () => {
  let component: AddCarLocationViewComponent;
  let fixture: ComponentFixture<AddCarLocationViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddCarLocationViewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AddCarLocationViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
