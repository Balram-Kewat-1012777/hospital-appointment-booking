import { TestBed } from '@angular/core/testing';

import { ModifyappointmentService } from './modifyappointment.service';

describe('ModifyappointmentService', () => {
  let service: ModifyappointmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModifyappointmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
