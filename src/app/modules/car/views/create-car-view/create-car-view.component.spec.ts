import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCarViewComponent } from './create-car-view.component';

describe('CreateCarViewComponent', () => {
  let component: CreateCarViewComponent;
  let fixture: ComponentFixture<CreateCarViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCarViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateCarViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
