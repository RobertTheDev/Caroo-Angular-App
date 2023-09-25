import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerViewComponent } from './seller-view.component';

describe('SellerViewComponent', () => {
  let component: SellerViewComponent;
  let fixture: ComponentFixture<SellerViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellerViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
