import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoPageLoaderComponent } from './info-page-loader.component';

describe('InfoPageLoaderComponent', () => {
  let component: InfoPageLoaderComponent;
  let fixture: ComponentFixture<InfoPageLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoPageLoaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoPageLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
