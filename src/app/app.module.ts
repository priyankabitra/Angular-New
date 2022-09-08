import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Table1Component } from './table1/table1.component';
import { StudentresultsComponent } from './studentresults/studentresults.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ListofemployeesComponent } from './listofemployees/listofemployees.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { Parent1Component } from './parent1/parent1.component';
import { Child1Component } from './child1/child1.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewsComponent } from './news/news.component';
import { EditlistofemployeesComponent } from './editlistofemployees/editlistofemployees.component';


@NgModule({
  declarations: [
    AppComponent,
    Table1Component,
    StudentresultsComponent,
    LoginComponent,
    RegistrationComponent,
    ListofemployeesComponent,
    HeaderComponent,
    FooterComponent,
    Parent1Component,
    Child1Component,
    DashboardComponent,
    NewsComponent,
    EditlistofemployeesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
