import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoPageErrorComponent } from './info-page-error.component';

describe('InfoPageErrorComponent', () => {
  let component: InfoPageErrorComponent;
  let fixture: ComponentFixture<InfoPageErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InfoPageErrorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InfoPageErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
