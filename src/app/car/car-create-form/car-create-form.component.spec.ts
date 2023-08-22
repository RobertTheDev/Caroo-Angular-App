import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarCreateFormComponent } from './car-create-form.component';

describe('CarCreateFormComponent', () => {
  let component: CarCreateFormComponent;
  let fixture: ComponentFixture<CarCreateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarCreateFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarCreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
