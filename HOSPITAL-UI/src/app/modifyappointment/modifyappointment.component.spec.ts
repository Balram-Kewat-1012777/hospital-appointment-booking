import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyappointmentComponent } from './modifyappointment.component';

describe('ModifyappointmentComponent', () => {
  let component: ModifyappointmentComponent;
  let fixture: ComponentFixture<ModifyappointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyappointmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyappointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
