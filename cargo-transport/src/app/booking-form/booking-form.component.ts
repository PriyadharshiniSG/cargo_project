import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BookService } from '../book.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.css']
})
export class BookingFormComponent implements OnInit {
  bookingForm!: FormGroup;
  submitted = false;
  object = [];
  value: boolean = true;
  user_id: string | null | undefined;
  constructor(private formBuilder: FormBuilder, private http:HttpClient,private api:BookService, private router: Router, private toastr:ToastrService) { }

  ngOnInit(): void {
    this.bookingForm = this.formBuilder.group({
      departure: ['', Validators.required],
      destination: ['', Validators.required], 
      fullName: ['', Validators.required],
      email: ['',[ Validators.required, Validators.email]],
      phonenumber: ['', [ Validators.required,
        Validators.pattern("^[0-9]*$"),
        Validators.minLength(10), Validators.maxLength(10)]],
      user_id: localStorage.getItem("user")     
  });
}

get f() { return this.bookingForm.controls; }
book(Formvalue: NgForm) {
  this.submitted = true;
console.log(Formvalue);
this.api.bookcargo(this.bookingForm.value).subscribe((data) => {
  this.toastr.success("Successfully booked your cargo!!  Please wait for the further process");
  // this.user_id =localStorage.getItem("user"),
  console.log(data);
},rej=>{
  this.toastr.error("Failed to Book");
});

}


onReset() {
  this.submitted = false;
  this.bookingForm.reset();
}
  }
 

