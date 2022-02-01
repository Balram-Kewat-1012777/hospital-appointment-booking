import { Component, OnInit } from '@angular/core';
import { AppointmentdataService } from '../appointmentdata.service';
@Component({
  selector: 'app-appointmentdata',
  templateUrl: './appointmentdata.component.html',
  styleUrls: ['./appointmentdata.component.css']
})
export class AppointmentdataComponent implements OnInit {

  appointmentlist: any;
 

  constructor(private service: AppointmentdataService) { }
  ngOnInit() {
    this.service.getAppointmentdata().subscribe(data => this.appointmentlist = data);
  }

  
  

}
