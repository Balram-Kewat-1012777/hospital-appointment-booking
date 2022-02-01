import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { FeaturesComponent } from './features/features.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgetComponent } from './forget/forget.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppointmentComponent } from './appointment/appointment.component';
import { AppointmentdataComponent } from './appointmentdata/appointmentdata.component';
import { SignupdataComponent } from './signupdata/signupdata.component';
import { HttpClientModule } from '@angular/common/http';
import { ModifyappointmentComponent } from './modifyappointment/modifyappointment.component';
import { FooterComponent } from './footer/footer.component';
import { ContactdataComponent } from './contactdata/contactdata.component';
import { DeleteComponent } from './delete/delete.component';

 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    ContactusComponent,
    DoctorsComponent,
    FeaturesComponent,
    LoginComponent,
    SignupComponent,
    ForgetComponent,
    AppointmentComponent,
    AppointmentdataComponent,
    SignupdataComponent,
    ModifyappointmentComponent,
    FooterComponent,
    ContactdataComponent,
    DeleteComponent,
     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,  //new added for validation
    HttpClientModule,
    FormsModule,
    
    
   
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
