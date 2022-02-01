import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SignupdataService {

  constructor(private http:HttpClient) { }
  getSignupdata(){
    return this.http.get("http://localhost:8080/signupdata")
  }
}
 