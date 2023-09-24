import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedCarsListComponent } from './saved-cars-list.component';

describe('SavedCarsListComponent', () => {
  let component: SavedCarsListComponent;
  let fixture: ComponentFixture<SavedCarsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SavedCarsListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SavedCarsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
