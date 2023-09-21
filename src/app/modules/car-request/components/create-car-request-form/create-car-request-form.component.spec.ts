import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCarRequestFormComponent } from './create-car-request-form.component';

describe('CreateCarRequestFormComponent', () => {
  let component: CreateCarRequestFormComponent;
  let fixture: ComponentFixture<CreateCarRequestFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCarRequestFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateCarRequestFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
