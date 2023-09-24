import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarRequestListComponent } from './car-request-list.component';

describe('CarRequestListComponent', () => {
  let component: CarRequestListComponent;
  let fixture: ComponentFixture<CarRequestListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarRequestListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarRequestListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
