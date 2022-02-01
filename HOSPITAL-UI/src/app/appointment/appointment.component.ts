import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl, NgForm } from '@angular/forms';
import swal from 'sweetalert';
import { AppointmentService } from '../appointment.service';
@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {
  
id:any;
  


  
/**********validation starts**/ 
 
myGroup: FormGroup = new FormGroup(
  {
   
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
 
constructor(private formBuilder: FormBuilder,private appointmentService: AppointmentService) {
 }
ngOnInit(): void {
  this.myGroup = this.formBuilder.group(
    {
      name: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      age: ['', [Validators.required, Validators.maxLength(2)]],
      email: ['', [Validators.required,Validators.email]],
      doctor: ['', [Validators.required]],
      date: ['', [Validators.required]],
      time: ['', [Validators.required,]],
      phone: ['', [Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
      problem: ['', [Validators.required]],
      hospital: ['', [Validators.required ]],
      address: ['', [Validators.required]],
      city: ['', [Validators.required]],
      


    }
  );

}
/*end of ngoninit */
get f(): { [key: string]: AbstractControl } {
  return this.myGroup.controls;
}
// showMsg: boolean = false;
onSubmit(): void {
  this.submitted = true;
  if (this.myGroup.invalid) {
       return;
      }
   console.log('FormValue', this.myGroup.value)
  this.appointmentService.bookAppointment(this.myGroup.value).subscribe(
    (resp: any) => {
      console.log(resp);
     
      swal("Appointment", "Booked Successfully", "success");
      this.submitted=false
      this.myGroup.reset();
    },
    (err: any) => {
      console.log(err);
      swal("Error", "error");

    }
  );
  console.log(this.myGroup.value);
} /* end of sumbit*/



onReset(): void {
  this.submitted = false;
 
  this.myGroup.reset();
  

}

     


}


