import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterCarsViewComponent } from './filter-cars-view.component';

describe('FilterCarsViewComponent', () => {
  let component: FilterCarsViewComponent;
  let fixture: ComponentFixture<FilterCarsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FilterCarsViewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FilterCarsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
