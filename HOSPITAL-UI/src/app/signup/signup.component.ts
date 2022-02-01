import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import   swal from 'sweetalert';
import { SignupService } from '../signup.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

   
  myGroup:FormGroup = new FormGroup(
    {
      firstname:new FormControl(''),
      lastname:new FormControl(''),
      email :new FormControl(''),
      username: new FormControl(''),
      empnumber:new FormControl(''),
      designation:new FormControl(''),
      password: new FormControl(''),
      cpassword: new FormControl('')
   
      
    }
    );
    submitted=false;
    constructor(private formBuilder:FormBuilder,private signupService:SignupService)
    {
    }
    ngOnInit():void{
      this.myGroup=this.formBuilder.group(
      {
        firstname:['',[Validators.required]],
        lastname:['',[Validators.required]],
        email:['',[Validators.required,Validators.email]],
        username:['',[Validators.required,Validators.minLength(6), Validators.maxLength(16)]],
        empnumber:['',[Validators.required]],
        designation:['',[Validators.required]],
        password:['',[Validators.required,Validators.minLength(6), Validators.maxLength(16)]],
        cpassword:['',[Validators.required,Validators.minLength(6), Validators.maxLength(16)]],
         
      }
      );
      
    }
    /*end of ngoninit */
    get f():{[key:string]:AbstractControl}
    {
      return this.myGroup.controls;
    }
    showMsg: boolean = false;
    showErr:boolean=false;
    onSubmit():void{
      this.submitted = true;
      if(this.myGroup.invalid){
         
        return;
      }
      console.log('FormValue', this.myGroup.value)

      this.signupService.storeSignupData(this.myGroup.value).subscribe(
        (resp: any) => {
          console.log(resp);
          swal("Account created Successfully", "", "success");
      this.submitted = false;

          
        },
        (err: any) => {
          console.log(err);
        }
      );
        
      this.myGroup.reset();
       
   
      console.log( this.myGroup.value, );
    } /* end of sumbit*/
    onReset():void{
      this.submitted=false;
      this.showMsg= false;
      this.showErr=false;
      this.myGroup.reset();
      
    }

    
  }
