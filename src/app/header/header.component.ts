import { Component, Input, OnInit } from '@angular/core';
import { RegistrationService } from '../registration.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() menu:any;
  constructor(private registrationService:RegistrationService) { }
 rcvdData:any;

  ngOnInit(): void {
    this.registrationService.recvData.subscribe((s:any)=>{
      console.log("Recived Data:::",s)
      this.rcvdData=s;
    })
 }

}
 

