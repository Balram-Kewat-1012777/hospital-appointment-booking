import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  constructor(private http:HttpClient) { } 
  API='http://localhost:8080';
  public storeSignupData(signupData: any){

    return this.http.post(this.API+ '/signupdata',signupData);
  }
}
