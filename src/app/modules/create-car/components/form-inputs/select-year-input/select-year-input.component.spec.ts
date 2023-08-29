import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectYearInputComponent } from './select-year-input.component';

describe('SelectYearInputComponent', () => {
  let component: SelectYearInputComponent;
  let fixture: ComponentFixture<SelectYearInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectYearInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectYearInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
