import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ApiserviceService} from '../apiservice.service'
import { ToastrService } from 'ngx-toastr';
import { JoinUsService } from '../join-us.service';
@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.css']
})
export class BookingFormComponent implements OnInit {
  bookingForm!: FormGroup;
  submitted = false;
  mydata:any;
  locationlist:any = [];
  value: boolean = true;
  user_id: string | null | undefined;
  temp: any;
  sample: any;
  constructor(private formBuilder: FormBuilder,private apiserv:JoinUsService, private http:HttpClient,private api:ApiserviceService, private router: Router, private toastr:ToastrService) { }
  ngOnInit(): void {
    this.bookingForm = this.formBuilder.group({
      departure: ['', Validators.required],
      destination: ['', Validators.required],
      itemName: ['', Validators.required] ,
      fullName: ['', Validators.required],
      email: ['',[ Validators.required, Validators.email]],
      phonenumber: ['', [ Validators.required,
        Validators.pattern("^[0-9]*$"),
        Validators.minLength(10), Validators.maxLength(10)]],
      user: localStorage.getItem("user")     
  });
  this.apiserv.getstatus("locate").subscribe(res=>{
    console.log(res);
   this.temp=res
   this.sample=this.temp.rows
   console.log(this.sample)
    this.locationlist=[];
    for(const element of this.sample){
    this.locationlist.push(element.doc)
    }
  console.log(this.locationlist)
  },error=>{
    console.log(error);
    
  });
}
get f() { return this.bookingForm.controls; }
book(Formvalue: NgForm) {
  this.submitted = true;
console.log(Formvalue);
this.api.bookcargo(this.bookingForm.value).subscribe((data) => {
  this.toastr.success("Successfully booked your cargo!!  Please wait for the further process");
  console.log(data);
},rej=>{
  console.log(rej);
  this.toastr.error("Failed to Book");
});
}
onReset() {
  this.submitted = false;
  this.bookingForm.reset();
}
  }
 

