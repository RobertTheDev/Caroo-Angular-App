import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarFilterListComponent } from './car-filter-list.component';

describe('CarFilterListComponent', () => {
  let component: CarFilterListComponent;
  let fixture: ComponentFixture<CarFilterListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarFilterListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarFilterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
