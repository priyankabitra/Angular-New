import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
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
    private http:HttpClient
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
          console.log(ele.uname);
          if(ele.uname===this.LoginForm.value.usr && ele.pass===this.LoginForm.value.pwd){
            if(ele.role==1){
              this.router.navigate(["dashboard"]);
            }else if(ele.role==2){
              this.router.navigate(["studentresults"]);
            }else if(ele.role==3){
            this.router.navigate(["table1"]);
            }else if(ele.role==4){
              this.router.navigate(["parent1"])
            }else{
              this.router.navigate(["listofemployees"]);
            }
          }else{
            this.invalidMsg=true;
          }
        })
      })
  }
    getValidate(){
      return this.http.get('./assets/Json/creds.json')
    }
  
}
