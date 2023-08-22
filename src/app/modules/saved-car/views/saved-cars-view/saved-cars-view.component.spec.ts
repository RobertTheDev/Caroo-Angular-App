import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedCarsViewComponent } from './saved-cars-view.component';

describe('SavedCarsViewComponent', () => {
  let component: SavedCarsViewComponent;
  let fixture: ComponentFixture<SavedCarsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavedCarsViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SavedCarsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
