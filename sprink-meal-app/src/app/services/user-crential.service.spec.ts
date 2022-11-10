import { TestBed } from '@angular/core/testing';

import { UserCrentialService } from './user-crential.service';

describe('UserCrentialService', () => {
  let service: UserCrentialService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserCrentialService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
