import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { StudentresultsComponent } from './studentresults/studentresults.component';
import { Table1Component } from './table1/table1.component';

const routes: Routes = [
  {path:"studentresults",component:StudentresultsComponent},
  {path:"table1",component:Table1Component},
  {path:"login",component:LoginComponent},
  {path:"registration",component:RegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
