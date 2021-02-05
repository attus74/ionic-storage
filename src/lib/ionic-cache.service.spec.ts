import { TestBed } from '@angular/core/testing';

import { IonicCacheService } from './ionic-cache.service';

describe('IonicCacheService', () => {
  let service: IonicCacheService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IonicCacheService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
