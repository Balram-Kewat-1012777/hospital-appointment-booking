import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  
  constructor(private http:HttpClient) { } 
  API='http://localhost:8080';
  public storeContactData(contactData: any){

    return this.http.post(this.API+ '/contactdata',contactData);
  }
  public getContactData(){

    return this.http.get(this.API+ '/getcontactdata');
  }
}