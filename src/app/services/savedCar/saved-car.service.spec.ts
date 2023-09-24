import { TestBed } from '@angular/core/testing';

import { SavedCarService } from './saved-car.service';

describe('SavedCarService', () => {
  let service: SavedCarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SavedCarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
