import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard'; 

import { Child1Component } from './child1/child1.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditlistofemployeesComponent } from './editlistofemployees/editlistofemployees.component';
import { ListofemployeesComponent } from './listofemployees/listofemployees.component';
import { LoginComponent } from './login/login.component';
import { NewsComponent } from './news/news.component';
import { Parent1Component } from './parent1/parent1.component';
import { RegistrationComponent } from './registration/registration.component';
import { StudentresultsComponent } from './studentresults/studentresults.component';
import { Table1Component } from './table1/table1.component';

const routes: Routes = [
  {path:"studentresults",component:StudentresultsComponent},
  {path:"table1",component:Table1Component},
  {path:"login",component:LoginComponent,},
  {path:"registration",component:RegistrationComponent},
  {path:"listofemployees",component:ListofemployeesComponent},
  {path:"parent1",component:Parent1Component},
  {path:"child1",component:Child1Component},
  {path:"dashboard",component:DashboardComponent, canActivate: [AuthGuard]},
  {path:"news",component:NewsComponent},
  {path:"editlistofemployees",component:EditlistofemployeesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
