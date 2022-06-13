import { Component, OnInit, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { JoinUsService } from '../join-us.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  submitted = false;
  object = [];
  value: boolean = true;
  evalu:any;
  submitvals = false;
  constructor(private formBuilder: FormBuilder,private el:ElementRef, private api:ApiserviceService, private http:HttpClient, private router: Router, private toastr: ToastrService,private apiserv:JoinUsService) { }
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: ['',[Validators.required]],
        firstName: ['',[Validators.required]],
        lastName: ['',[Validators.required]],
        password: ['',[Validators.required]],
        confirmPassword: ['',[Validators.required]],
        acceptTerms: [false]
    });
}
get email() { return this.registerForm.get('email')!; }
get firstName() { return this.registerForm.get('firstName')!; }
get lastName() { return this.registerForm.get('lastName')!; }
get password() { return this.registerForm.get('password')!; }
get confirmPassword() { return this.registerForm.get('confirmPassword')!; }
get acceptTerms() { return this.registerForm.get('acceptTerms')!; }

// if()
register() {
    this.submitted = true;
  if(!this.registerForm.controls['email'].valid){
    this.toastr.error('Please enter valid email')
    return
  }
  this.api.enroll(this.registerForm.value).subscribe((data) => {
    console.log(data);
    let obj:any =[]
    obj= data;
    if(obj.error){
      this.toastr.error(obj.reason);
    }
    else{
      this.toastr.success("Registered successfully!!");
       this.router.navigate(['/login']);
    }
  },rej=>{
    console.log(rej);
     this.toastr.error("registration failed");
  });
}
validateuser(){
  const evalu = this.registerForm.value['email']
  this.apiserv.getData("user",'',evalu).subscribe((response:any)=>{
    console.log(response)
    if(response.docs.length >=1){
    this.toastr.error("email already exist");
    this.registerForm.controls['email'].reset();
    this.el.nativeElement.querySelector('#email').focus()
    }
   
  },err=>{
    console.error(err)
  })
}
onReset() {
    this.submitted = false;
    this.registerForm.reset();
}
}
