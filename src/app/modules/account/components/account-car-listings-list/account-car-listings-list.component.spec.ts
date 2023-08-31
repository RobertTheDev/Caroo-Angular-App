import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountCarListingsListComponent } from './account-car-listings-list.component';

describe('AccountCarListingsListComponent', () => {
  let component: AccountCarListingsListComponent;
  let fixture: ComponentFixture<AccountCarListingsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccountCarListingsListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AccountCarListingsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
