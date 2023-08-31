import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloseAccountViewComponent } from './close-account-view.component';

describe('CloseAccountViewComponent', () => {
  let component: CloseAccountViewComponent;
  let fixture: ComponentFixture<CloseAccountViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CloseAccountViewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CloseAccountViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
