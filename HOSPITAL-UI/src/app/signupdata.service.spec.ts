import { TestBed } from '@angular/core/testing';

import { SignupdataService } from './signupdata.service';

describe('SignupdataService', () => {
  let service: SignupdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SignupdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
