import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessibilityStatementViewComponent } from './accessibility-statement-view.component';

describe('AccessibilityStatementViewComponent', () => {
  let component: AccessibilityStatementViewComponent;
  let fixture: ComponentFixture<AccessibilityStatementViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccessibilityStatementViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccessibilityStatementViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
