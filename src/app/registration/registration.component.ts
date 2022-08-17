import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { group } from '@angular/animations';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  RegisterForm:any= FormGroup;
  submitted:boolean=false;
  
  
  constructor(
    private rf: FormBuilder,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.RegisterForm = this.rf.group({
      ftn: ['', Validators.required],
      ltn: ['', Validators.required],
      pwd: ['', Validators.required],
      cnfpwd: ['', Validators.required],
      dob: ['', Validators.required],
      number: ['', Validators.required],
      address: ['', Validators.required],
      pin: ['', Validators.required],
      email: ['', Validators.required]

    })
   
  }

  get r(){return this.RegisterForm.controls}


  onSubmit(){
    console.log(this.RegisterForm)
      this.submitted=true;
    }

}
