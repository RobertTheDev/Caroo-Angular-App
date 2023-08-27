import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCarImagesComponent } from './create-car-images.component';

describe('CreateCarImagesComponent', () => {
  let component: CreateCarImagesComponent;
  let fixture: ComponentFixture<CreateCarImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateCarImagesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateCarImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
