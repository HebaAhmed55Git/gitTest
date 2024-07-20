import { TestBed } from '@angular/core/testing';

import { OurDataService } from './our-data.service';

describe('OurDataService', () => {
  let service: OurDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OurDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
