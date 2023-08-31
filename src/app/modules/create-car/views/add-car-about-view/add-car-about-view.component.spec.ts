import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCarAboutViewComponent } from './add-car-about-view.component';

describe('AddCarAboutViewComponent', () => {
  let component: AddCarAboutViewComponent;
  let fixture: ComponentFixture<AddCarAboutViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddCarAboutViewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AddCarAboutViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
