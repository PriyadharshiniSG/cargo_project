import { Component } from '@angular/core';
import { ApiserviceService } from './apiservice.service';
import {  FormGroup, FormBuilder, Validators} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cargo-transport';
  form!: FormGroup;
  constructor (private fb: FormBuilder, private service: ApiserviceService){}
  ngOnInit(){
    
  }
  
}
