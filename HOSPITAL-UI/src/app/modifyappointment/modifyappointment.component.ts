import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import swal from 'sweetalert';

import { ModifyappointmentService } from '../modifyappointment.service';

@Component({
  selector: 'app-modifyappointment',
  templateUrl: './modifyappointment.component.html',
  styleUrls: ['./modifyappointment.component.css']
})
export class ModifyappointmentComponent implements OnInit {

  appointmenttId: any;



  /**********validation starts**/

  myGroup: FormGroup = new FormGroup(
    {
      id: new FormControl(''),
      name: new FormControl(''),
      gender: new FormControl(''),
      age: new FormControl(''),
      email: new FormControl(''),
      doctor: new FormControl(''),
      date: new FormControl(''),
      time: new FormControl(''),
      phone: new FormControl(''),
      problem: new FormControl(''),
      hospital: new FormControl(''),
      address: new FormControl(''),
      city: new FormControl(''),



    }
  );
  submitted = false;
  AppointmentToUpdate = {
    id: "",
    name: "",
    gender: "",
    age: "",
    email: "",
    phone: "",
    doctor: "",
    date: "",
    time: "",
    problem: "",
    hospital: "",
    address: "",
    city: ""
  }




  constructor(private formBuilder: FormBuilder, private modifyService: ModifyappointmentService) {
  }
  ngOnInit(): void {
    this.myGroup = this.formBuilder.group(
      {
        id: ['', [Validators.required]],
        name: ['', [Validators.required]],
        gender: ['', [Validators.required]],
        age: ['', [Validators.required,]],
        email: ['', [Validators.required, Validators.email]],
        doctor: ['', [Validators.required]],
        date: ['', [Validators.required]],
        time: ['', [Validators.required,]],
        phone: ['', [Validators.required]],
        problem: ['', [Validators.required]],
        hospital: ['', [Validators.required]],
        address: ['', [Validators.required]],
        city: ['', [Validators.required]],



      }
    );

  }
  /*end of ngoninit */
  get f(): { [key: string]: AbstractControl } { return this.myGroup.controls; }



  updateAppointment(): void {
    this.submitted = true;
    if (this.myGroup.invalid) {
      return;
    }


    this.modifyService.updateAppointment(this.myGroup.value).subscribe(
      (resp: any) => {
        console.log(resp);
        swal("Appointment", "Edit  Successfully", "success");
        this.submitted = false
        this.myGroup.reset();
      },
      (err: any) => {
        alert("err")
        console.log(err);
        console.log('FormValue', this.myGroup)

      }
    );
  }

  onReset(): void {
    this.submitted = false;
    this.myGroup.reset();

  }



}


