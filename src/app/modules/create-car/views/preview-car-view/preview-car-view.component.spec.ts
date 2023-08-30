import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewCarViewComponent } from './preview-car-view.component';

describe('PreviewCarViewComponent', () => {
  let component: PreviewCarViewComponent;
  let fixture: ComponentFixture<PreviewCarViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviewCarViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreviewCarViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
