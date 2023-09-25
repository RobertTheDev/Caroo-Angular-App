import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCarListingsViewComponent } from './my-car-listings-view.component';

describe('MyCarListingsViewComponent', () => {
  let component: MyCarListingsViewComponent;
  let fixture: ComponentFixture<MyCarListingsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyCarListingsViewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MyCarListingsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
