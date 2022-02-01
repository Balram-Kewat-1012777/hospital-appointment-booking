import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModifyappointmentService {

  constructor(private http:HttpClient) { }
  API='http://localhost:8080';
  // public bookAppointment(appointmentData: any){
  //   return this.http.post(this.API+ '/bookappointment',appointmentData);
  // }

  public deleteAppointment(id:any){
    console.log(id);
    return this.http.delete(this.API +'/deleteAppointment?id='+id);
  }
public updateAppointment(appointment: any) {
  return this.http.put(this.API + '/updateAppointment',appointment);
}}