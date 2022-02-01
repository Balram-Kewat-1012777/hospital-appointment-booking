import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AppComponent } from './app.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { AppointmentdataComponent } from './appointmentdata/appointmentdata.component';
import { ContactdataComponent } from './contactdata/contactdata.component';
import { ContactusComponent } from './contactus/contactus.component';
import { DeleteComponent } from './delete/delete.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { FeaturesComponent } from './features/features.component';
import { FooterComponent } from './footer/footer.component';
import { ForgetComponent } from './forget/forget.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ModifyappointmentComponent } from './modifyappointment/modifyappointment.component';
import { SignupComponent } from './signup/signup.component';
import { SignupdataComponent } from './signupdata/signupdata.component';
// import { TestComponent } from './test/test.component';

const routes: Routes = [
  {path:'appointmentdata',
  component:AppointmentdataComponent},
  {path:'footer',
  component:FooterComponent},
  {path:'appointment',
  component:AppointmentComponent},
  {path:'modifyappointment',
  component:ModifyappointmentComponent},
  {path:'aboutus',
  component:AboutusComponent},
  {path:'contactus',
  component:ContactusComponent},
  {path:'doctors',
  component:DoctorsComponent},
  {path:'features',
  component:FeaturesComponent},
  {path:'home',
  component:HomeComponent},
  {path:'login',
  component:LoginComponent},
  {path:'signup',
  component:SignupComponent},
  {path:'signupdata',
  component:SignupdataComponent},
  {path:'forget',
  component:ForgetComponent},
  {path:'delete',
  component:DeleteComponent},
  {path:'contactdata',
  component:ContactdataComponent},
  {
    path: '',
     
    children: [
      {  path: '',
        component: HomeComponent }
    ]
  }



  // {path:'test',
  // component:TestComponent},
  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
