import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowItWorksViewComponent } from './how-it-works-view.component';

describe('HowItWorksViewComponent', () => {
  let component: HowItWorksViewComponent;
  let fixture: ComponentFixture<HowItWorksViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HowItWorksViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HowItWorksViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
