import { TestBed } from '@angular/core/testing';

import { TopcustomersDataService } from './topcustomers-data.service';

describe('TopcustomersDataService', () => {
  let service: TopcustomersDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TopcustomersDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
