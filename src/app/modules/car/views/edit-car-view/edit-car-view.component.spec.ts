import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCarViewComponent } from './edit-car-view.component';

describe('EditCarViewComponent', () => {
  let component: EditCarViewComponent;
  let fixture: ComponentFixture<EditCarViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditCarViewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EditCarViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
