import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';
import { HttpClient } from '@angular/common/http';
import { MustMatch } from './must-match.validator';
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
  constructor(private formBuilder: FormBuilder, private api:ApiserviceService, private http:HttpClient, private router: Router, private toastr: ToastrService,private apiserv:JoinUsService) { }


  ngOnInit() {
    this.registerForm = this.formBuilder.group({
        // title: ['', Validators.required],
        // firstName: ['', Validators.required],
        // lastName: ['', Validators.required],
        // email: ['', [Validators.required, Validators.email]],
        // password: ['', [Validators.required, Validators.minLength(6)]],
        // confirmPassword: ['', Validators.required],
        // acceptTerms: [false, Validators.requiredTrue],
        title: [''],
        firstName: [''],
        lastName: [''],
        email: [''],
        password: [''],
        confirmPassword: [''],
        acceptTerms: [false]
    });
  
}

get f() { return this.registerForm.controls; }
// get title(){
//   this.registerForm.get('title');
// }

register(Formvalue: NgForm) {
    this.submitted = true;
  console.log(Formvalue);
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
    this.submitvals =false
    }
    else{
      this.submitvals =true
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
