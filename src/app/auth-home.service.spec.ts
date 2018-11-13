import { TestBed } from '@angular/core/testing';

import { AuthHomeService } from './auth-home.service';

describe('AuthHomeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthHomeService = TestBed.get(AuthHomeService);
    expect(service).toBeTruthy();
  });
});
