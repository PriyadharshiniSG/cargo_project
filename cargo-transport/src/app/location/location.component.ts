import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { JoinUsService } from '../join-us.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  locationForm!:FormGroup; 
  constructor(private fb:FormBuilder ,private http:HttpClient, private apiserv:JoinUsService) { }
  record:any={
    locate:'',
    type:''
  }
  ngOnInit(): void {
    localStorage.getItem("admin");     
    this.locationForm = this.fb.group({
      locate: [this.record.locate],
      type: 'locate'
   });
  }
  storing(){
    this.apiserv.add("cargo-registration",this.record.value).subscribe(res=>{
      console.log(res);
      alert("Your Location was stored successfully!");
    },(rej: string)=>{
      alert("oops! Cannot post location"+rej);
    });
  }
}
