import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';
import { HttpClient } from '@angular/common/http';
import { MustMatch } from './must-match.validator';
import { Router } from '@angular/router';
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
  constructor(private formBuilder: FormBuilder, private api:ApiserviceService, private http:HttpClient, private router: Router) { }

  
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
        title: ['', Validators.required],
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required],
        acceptTerms: [false, Validators.requiredTrue],
    }, {
        validator: MustMatch('password', 'confirmPassword')
    });
}

get f() { return this.registerForm.controls; }

register(Formvalue: NgForm) {
    this.submitted = true;
  console.log(Formvalue);
  this.api.enroll(this.registerForm.value).subscribe((data) => {
    console.log(data);
  })
  alert("Successfully posted your data!!");

  this.router.navigate(['/login']);
}

// onSubmit() {
//     this.submitted = true;

//     // stop here if form is invalid
//     if (this.registerForm.invalid) {
//         return;
//     }

//     // display form values on success
//     alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
//     console.log(JSON.stringify(this.registerForm.value));
// }
onReset() {
    this.submitted = false;
    this.registerForm.reset();
}

}
