import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarFilterMenuComponent } from './car-filter-menu.component';

describe('CarFilterMenuComponent', () => {
  let component: CarFilterMenuComponent;
  let fixture: ComponentFixture<CarFilterMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarFilterMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarFilterMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
