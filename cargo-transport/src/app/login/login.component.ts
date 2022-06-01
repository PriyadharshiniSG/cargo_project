import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormsModule } from '@angular/forms';
import {Router} from '@angular/router';
import { ApiserviceService } from '../apiservice.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form!: FormGroup;
  mydata: any;
  records: any = [];
  constructor(private formBuilder: FormBuilder, private apiservice:ApiserviceService, private router: Router) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });  
    // this.login(Formvalue:any);
  }
get f() { return this.form.controls; }

  login(Formvalue:any)
  {
    
    this.apiservice.retrieve().subscribe(data=>{
      this.mydata=data;
      this.mydata=this.mydata.docs;
      for(const i of this.mydata){
        this.records.push(i);  
        if(i.email == Formvalue.email && i.password == Formvalue.password){
          this.router.navigate(['/usernav']);
          alert("data verified");
        }   
        else {
      
      }
        
      }
      
      console.log(this.records);
    },rej=>{
      console.log('Error',rej);
    })

      
      }
  
      
    }
    



