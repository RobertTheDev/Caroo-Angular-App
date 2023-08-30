import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCarFeaturesViewComponent } from './add-car-features-view.component';

describe('AddCarFeaturesViewComponent', () => {
  let component: AddCarFeaturesViewComponent;
  let fixture: ComponentFixture<AddCarFeaturesViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCarFeaturesViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCarFeaturesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
