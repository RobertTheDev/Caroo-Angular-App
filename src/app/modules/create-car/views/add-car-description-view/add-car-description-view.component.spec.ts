import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCarDescriptionViewComponent } from './add-car-description-view.component';

describe('AddCarDescriptionViewComponent', () => {
  let component: AddCarDescriptionViewComponent;
  let fixture: ComponentFixture<AddCarDescriptionViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddCarDescriptionViewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AddCarDescriptionViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
