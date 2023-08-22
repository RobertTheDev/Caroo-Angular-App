import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloseAccountFormComponent } from './close-account-form.component';

describe('CloseAccountFormComponent', () => {
  let component: CloseAccountFormComponent;
  let fixture: ComponentFixture<CloseAccountFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CloseAccountFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CloseAccountFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
