import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppointmentdataService {
  constructor(private http:HttpClient) { }
  getAppointmentdata(){
    return this.http.get("http://localhost:8080/appointmentdata")
  }
  
}
 