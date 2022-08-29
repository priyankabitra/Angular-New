import { Component } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title ="ZPHS";

  menus:any={
    "header-menu":[
    {link:"/dashboard",name:"Dashboard"},
    {link:"/studentresults",name:"Studentresults"},
    {link:"/table1",name:"Table"},
    {link:"/login",name:"login"},
    {link:"/registration",name:"Registration"},
    {link:"/listofemployees",name:"Listofemployees"},
    {link:"/parent1",name:"Parent1"}
    ]
  }
}
  