import { TestBed } from '@angular/core/testing';

import { AddWaterService } from './add-water.service';

describe('AddWaterService', () => {
  let service: AddWaterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddWaterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
