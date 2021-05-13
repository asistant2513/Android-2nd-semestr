import { TestBed } from '@angular/core/testing';

import { MembersDataService } from './members-data.service';

describe('MembersDataService', () => {
  let service: MembersDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MembersDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
