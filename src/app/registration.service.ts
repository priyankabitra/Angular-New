import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  url='http://localhost:3000/users';

  constructor(private http: HttpClient) { }
  listofemployees: any=[];
  savePostData(data:any){
    return this.http.post(this.url,data);
  }
}
