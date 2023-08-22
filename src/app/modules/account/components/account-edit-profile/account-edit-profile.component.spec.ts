import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountEditProfileComponent } from './account-edit-profile.component';

describe('AccountEditProfileComponent', () => {
  let component: AccountEditProfileComponent;
  let fixture: ComponentFixture<AccountEditProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountEditProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountEditProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
