import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  myGroup:FormGroup = new FormGroup(
    {
             emailname:new FormControl(''),
             password: new FormControl(''),
       
      
    }
    );
    submitted=false;
    constructor(private formBuilder:FormBuilder)
    {
    }
    ngOnInit():void{
      this.myGroup=this.formBuilder.group(
      {
      
        email:['',[Validators.required,Validators.email]],
        password:['',[Validators.required,Validators.minLength(6), Validators.maxLength(16)]],
         
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
    router:boolean=true;
    onSubmit():void{
      
      if(this.myGroup.invalid){
        this.showErr=true;
        this.router=false;
        return;
      }
      else{
        this.submitted = true;
        this.showErr=false;
      this.showMsg= true;
      this.router=true;
      }
      console.log(JSON.stringify(this.myGroup.value,null,2));
    } /* end of sumbit*/
    onReset():void{
      this.submitted=false;
      this.showErr=false;
      this.myGroup.reset();
      
    }

}

 