import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAccountProfileViewComponent } from './update-account-profile-view.component';

describe('UpdateAccountProfileViewComponent', () => {
  let component: UpdateAccountProfileViewComponent;
  let fixture: ComponentFixture<UpdateAccountProfileViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateAccountProfileViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateAccountProfileViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
