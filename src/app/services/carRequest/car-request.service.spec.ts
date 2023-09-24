import { TestBed } from '@angular/core/testing';

import { CarRequestService } from './car-request.service';

describe('CarRequestService', () => {
  let service: CarRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
