import { TestBed } from '@angular/core/testing';

import { ItemsFetchService } from './items-fetch.service';

describe('ItemsFetchService', () => {
  let service: ItemsFetchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemsFetchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
