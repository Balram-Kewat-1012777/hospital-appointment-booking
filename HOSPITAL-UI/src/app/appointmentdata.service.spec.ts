import { TestBed } from '@angular/core/testing';

import { AppointmentdataService } from './appointmentdata.service';

describe('AppointmentdataService', () => {
  let service: AppointmentdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppointmentdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
