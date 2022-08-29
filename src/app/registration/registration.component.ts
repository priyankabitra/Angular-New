import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { RegistrationService } from '../registration.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  RegisterForm:any= FormGroup;
  submitted:boolean=false;
  RegistrationService: any;
  
  
  constructor(
    private rf: FormBuilder,
    private router:Router,
    private registrationService: RegistrationService,
  ) { }

  ngOnInit(): void {
    const newLocal = 'cnfpwd';
    this.RegisterForm = this.rf.group({
      ftn: ['', Validators.required],
      ltn: ['', Validators.required],
      pwd: ['', Validators.required],
      cnfpwd: ['', Validators.required],
      dob: ['', Validators.required],
      number: ['', Validators.required],
      address: ['', Validators.required],
      pin: ['', Validators.required],
      email: ['', [Validators.required,Validators.email]],
    }, {
        Validator: ConfirmPasswordValidator('pwd')

     });
   
  }

  get r(){return this.RegisterForm.controls}


  onSubmit(){
    console.log(this.RegisterForm)
      this.submitted=true;
      if(this.RegisterForm.invalid){
        return;
      }

      let registerObj={
      ftn: this.RegisterForm.value.ftn,
      ltn: this.RegisterForm.value.ltn,
      dob: this.RegisterForm.value.dob,
      number: this.RegisterForm.value.number,
      address: this.RegisterForm.value.address,
      pin: this.RegisterForm.value.pin,
      email: this.RegisterForm.value.email,
      }
      this.registrationService.listofemployees.push(registerObj);
      console.log('Service:::',this.RegisterForm.value)
      this.registrationService.savePostData(this.RegisterForm.value).subscribe(p=>{
        console.log('Data Added::::',p);
      })
      //console.log(registerObj);
      this.router.navigate(['/','listofemployees']);
    return
    }

  
}
function ConfirmPasswordValidator(arg0: string): any {
  throw new Error('Function not implemented.');
}

