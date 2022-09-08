import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  LoginForm:any= FormGroup;
  submitted:boolean=false;
  invalidMsg:boolean=false;

  constructor(
    private fb: FormBuilder,
    private router:Router,
    private http:HttpClient,
    private registrationService: RegistrationService
  ) { }

  ngOnInit(): void {
    this.LoginForm = this.fb.group({
      usr: ['', [Validators.required]],
      pwd: ['', Validators.required],

    })
   
  }

  get f(){return this.LoginForm.controls}


  onSubmit(){
    console.log(this.LoginForm)
      this.submitted=true;
      if(this.LoginForm.invalid){
        return;
      }
      this.invalidMsg=false;
      this.getValidate().subscribe(d=>{
        let date:any=[];
        date = d;
        date.forEach((ele:any) =>{
          console.log(ele);
          if(ele.email===this.LoginForm.value.usr && ele.pwd===this.LoginForm.value.pwd){
            this.registrationService.setData(ele.ftn)
            this.registrationService.loggedIn=true;
           this.router.navigate(['/','dashboard']);
           
          }else{
            this.invalidMsg=true;
          }
        })
      })
  }
    getValidate(){
      return this.http.get('http://localhost:3000/users')
    }
    
}
