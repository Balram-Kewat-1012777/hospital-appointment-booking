import { Component, OnInit } from '@angular/core';
import { SignupdataService } from '../signupdata.service';

@Component({
  selector: 'app-signupdata',
  templateUrl: './signupdata.component.html',
  styleUrls: ['./signupdata.component.css']
})
export class SignupdataComponent implements OnInit {

signupdatalist:any;   //signupdatalist is used in html ngFor loop

  constructor(private service:SignupdataService) { }

  ngOnInit() {
    this.service.getSignupdata().subscribe(data=>this.signupdatalist=data);
  }

}
