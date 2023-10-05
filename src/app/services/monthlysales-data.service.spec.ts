import { TestBed } from '@angular/core/testing';

import { MonthlysalesDataService } from './monthlysales-data.service';

describe('MonthlysalesDataService', () => {
  let service: MonthlysalesDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MonthlysalesDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
