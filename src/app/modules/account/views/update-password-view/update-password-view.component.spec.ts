import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePasswordViewComponent } from './update-password-view.component';

describe('UpdatePasswordViewComponent', () => {
  let component: UpdatePasswordViewComponent;
  let fixture: ComponentFixture<UpdatePasswordViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePasswordViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatePasswordViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
