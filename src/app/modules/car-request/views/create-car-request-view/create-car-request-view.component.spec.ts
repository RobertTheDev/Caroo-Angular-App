import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCarRequestViewComponent } from './create-car-request-view.component';

describe('CreateCarRequestViewComponent', () => {
  let component: CreateCarRequestViewComponent;
  let fixture: ComponentFixture<CreateCarRequestViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCarRequestViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateCarRequestViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
