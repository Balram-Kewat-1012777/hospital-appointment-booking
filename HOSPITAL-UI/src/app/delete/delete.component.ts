import { Component, OnInit } from '@angular/core';
import   swal from 'sweetalert';
import { ModifyappointmentService } from '../modifyappointment.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  appointmenttId: any;

  constructor(private service: ModifyappointmentService) { }
  ngOnInit(): void {

  }

  deleteAppointment(appointmentt: any) {
    console.log('apponitment', this.appointmenttId)
    this.service.deleteAppointment(this.appointmenttId).subscribe(
      (resp) => {
        console.log(resp);
        swal("Appointment deleted", "", "success");

      },
      (err) => {
        console.log(err);
      }
    );


  }
}
