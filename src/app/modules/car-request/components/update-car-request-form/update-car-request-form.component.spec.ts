import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCarRequestFormComponent } from './update-car-request-form.component';

describe('UpdateCarRequestFormComponent', () => {
  let component: UpdateCarRequestFormComponent;
  let fixture: ComponentFixture<UpdateCarRequestFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateCarRequestFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UpdateCarRequestFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
