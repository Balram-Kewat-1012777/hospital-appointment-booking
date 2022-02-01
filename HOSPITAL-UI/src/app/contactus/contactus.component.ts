import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import swal from 'sweetalert';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
 
   
  myGroup:FormGroup = new FormGroup(
    {
      query:new FormControl(''),
      name:new FormControl(''),
      email:new FormControl(''),
      subject: new FormControl(''),
      contact:new FormControl(''),
      message:new FormControl(''),
      
       
   
      
    }
    );
    submitted=false;
    constructor(private formBuilder:FormBuilder,private contactService:ContactService)
    {
    }
    ngOnInit():void{
      this.myGroup=this.formBuilder.group(
      {
        query:['',[Validators.required]],
        name:['',[Validators.required]],
        email:['',[Validators.required,Validators.email]],
        subject:['',[Validators.required]],
        contact:['',[Validators.required]],
        message:['',[Validators.required]],
         
      }
      );
      
    }
    /*end of ngoninit */
    get f():{[key:string]:AbstractControl}
    {
      return this.myGroup.controls;
    }
   
    async onSubmit():Promise<void>{
      this.submitted=true
      if(this.myGroup.invalid){
        return;
      }
      console.log('Formvalue',this.myGroup.value)
      this.contactService.storeContactData(this.myGroup.value).subscribe(
        (resp: any) => {
          console.log(resp);
      swal("Your valuable", "Response has been Recorded", "success");
      this.submitted=false
      this.myGroup.reset();

           
        },
        (err: any) => {
          console.log(err);
        }
      );
    
  


       
      await new Promise(f => setTimeout(f, 3000));
      
      console.log(this.myGroup.value);
    } /* end of sumbit*/




    onReset():void{
      this.submitted=false;
      // this.showMsg=false;
      this.myGroup.reset();
      
      
    }
     
  }
