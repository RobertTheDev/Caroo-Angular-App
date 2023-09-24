import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEmailViewComponent } from './update-email-view.component';

describe('UpdateEmailViewComponent', () => {
  let component: UpdateEmailViewComponent;
  let fixture: ComponentFixture<UpdateEmailViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateEmailViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateEmailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
