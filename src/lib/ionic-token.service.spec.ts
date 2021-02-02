import { TestBed } from '@angular/core/testing';

import { IonicTokenService } from './ionic-token.service';

describe('IonicTokenService', () => {
  let service: IonicTokenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IonicTokenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
