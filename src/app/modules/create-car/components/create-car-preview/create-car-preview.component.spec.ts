import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCarPreviewComponent } from './create-car-preview.component';

describe('CreateCarPreviewComponent', () => {
  let component: CreateCarPreviewComponent;
  let fixture: ComponentFixture<CreateCarPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateCarPreviewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateCarPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
