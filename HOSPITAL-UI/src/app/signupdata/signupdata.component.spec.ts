import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupdataComponent } from './signupdata.component';

describe('SignupdataComponent', () => {
  let component: SignupdataComponent;
  let fixture: ComponentFixture<SignupdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupdataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
