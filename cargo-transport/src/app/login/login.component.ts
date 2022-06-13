import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators  } from '@angular/forms';
import {Router} from '@angular/router';
import { ApiserviceService } from '../apiservice.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  mydata: any;
  records: any = [];
  mydata1: any;
  constructor(private formBuilder: FormBuilder, private apiservice:ApiserviceService, private router: Router, private toastr:ToastrService ) { }
  ngOnInit() {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });  
  }
get f() { return this.form.controls; }
  login(Formvalue:any)
  { 
     this.apiservice.getadmin().subscribe((data1:any)=>{
    console.log(data1)
    this.mydata1=data1;
      this.mydata1=this.mydata1.docs;
      for(const j of this.mydata1){
        this.records.push(j);
    if(j.email === Formvalue.email && j.password === Formvalue.password){
      localStorage.setItem("admin",j._id);
      this.toastr.success("Logged in Successfully");
      this.router.navigate(['/booking-details']);
    }
  }
      },error=>{
        console.log("error",error);
      });
  
    this.apiservice.retrieve().subscribe(data=>{
      this.mydata=data;
      this.mydata=this.mydata.docs;
      for(const i of this.mydata){
        this.records.push(i);  
        if(i.email === Formvalue.email && i.password === Formvalue.password){
          localStorage.setItem("user",i._id);
          this.toastr.success("Logged in Successfully");
          this.router.navigate(['/booking-form']);
        }  
      } 
    },rej=>{
      this.toastr.error("Failed to Login");
      console.log('Error',rej);
    })
      // }
    }
    }
    



