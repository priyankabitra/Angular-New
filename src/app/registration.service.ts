import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  url='http://localhost:3000/users';
  constructor(private http: HttpClient) { }

  private msgData:any=new Subject();

  public recvData=this.msgData.asObservable();

  setData(obj:any){
    this.msgData.next(obj);
  }

 // setData(arg0: string) {
   // throw new Error('Method not implemented.');
 // }

  listofemployees: any=[];
  savePostData(data:any){
    return this.http.post(this.url ,data);
  }
  loggedIn:boolean=false;
  
}
