import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarRequestCardComponent } from './car-request-card.component';

describe('CarRequestCardComponent', () => {
  let component: CarRequestCardComponent;
  let fixture: ComponentFixture<CarRequestCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarRequestCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CarRequestCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
