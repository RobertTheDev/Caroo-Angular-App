import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountCarListingsViewComponent } from './account-car-listings-view.component';

describe('AccountCarListingsViewComponent', () => {
  let component: AccountCarListingsViewComponent;
  let fixture: ComponentFixture<AccountCarListingsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccountCarListingsViewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AccountCarListingsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
