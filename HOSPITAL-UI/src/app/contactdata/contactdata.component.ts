import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contactdata',
  templateUrl: './contactdata.component.html',
  styleUrls: ['./contactdata.component.css']
})
export class ContactdataComponent implements OnInit {
  contactlist:any;
  constructor(private service: ContactService) { }
  ngOnInit() {
    this.service.getContactData().subscribe((data: any) => this.contactlist = data);
  }

}
