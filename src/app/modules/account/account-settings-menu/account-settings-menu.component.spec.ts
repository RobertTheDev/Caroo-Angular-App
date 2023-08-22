import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountSettingsMenuComponent } from './account-settings-menu.component';

describe('AccountSettingsMenuComponent', () => {
  let component: AccountSettingsMenuComponent;
  let fixture: ComponentFixture<AccountSettingsMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountSettingsMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountSettingsMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
