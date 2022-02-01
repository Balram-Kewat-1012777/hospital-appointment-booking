import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentdataComponent } from './appointmentdata.component';

describe('AppointmentdataComponent', () => {
  let component: AppointmentdataComponent;
  let fixture: ComponentFixture<AppointmentdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppointmentdataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmentdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
