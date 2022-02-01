import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  
  constructor(private http:HttpClient) { } 
  API='http://localhost:8080';
  public bookAppointment(appointmentData: any){

    return this.http.post(this.API+ '/bookappointment',appointmentData);
  }


}