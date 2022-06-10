import { Component, OnInit } from '@angular/core';
import {  FormBuilder } from '@angular/forms';
import { JoinUsService } from '../join-us.service';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  locationForm:any; 
  constructor(private fb:FormBuilder ,private http:HttpClient, private apiserv:JoinUsService,private toastr: ToastrService) { }
  record:any={
    locate:''
  }
  ngOnInit(): void {
    localStorage.getItem("admin");     
    this.locationForm = this.fb.group({
      locate: [this.record.locate]
   });
   console.log(this.locationForm);
   
  }
  storing(){
    this.locationForm.value['type']='locate'
    this.apiserv.add("cargo-registration",this.locationForm.value).subscribe(res=>{
      console.log(res);
      this.toastr.success("Your Location was stored successfully!");
    },(rej: string)=>{
      this.toastr.error("oops! Cannot post location"+rej);
    });
  }
}
