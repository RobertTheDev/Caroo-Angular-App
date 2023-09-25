import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCarRequestsViewComponent } from './my-car-requests-view.component';

describe('MyCarRequestsViewComponent', () => {
  let component: MyCarRequestsViewComponent;
  let fixture: ComponentFixture<MyCarRequestsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyCarRequestsViewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MyCarRequestsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
