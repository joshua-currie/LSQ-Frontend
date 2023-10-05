import { TestBed } from '@angular/core/testing';

import { TopcardsDataService } from './topcards-data.service';

describe('TopcardsDataService', () => {
  let service: TopcardsDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TopcardsDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
