import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCarImagesViewComponent } from './add-car-images-view.component';

describe('AddCarImagesViewComponent', () => {
  let component: AddCarImagesViewComponent;
  let fixture: ComponentFixture<AddCarImagesViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddCarImagesViewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AddCarImagesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
