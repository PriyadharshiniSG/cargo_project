import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BookService } from '../book.service';
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
  constructor(private formBuilder: FormBuilder, private http:HttpClient,private api:BookService, private router: Router) { }

  ngOnInit(): void {
    this.bookingForm = this.formBuilder.group({
      departure: ['', Validators.required],
      destination: ['', Validators.required], 
      fullName: ['', Validators.required],
      email: ['',[ Validators.required, Validators.email]],
      phonenumber: ['', [ Validators.required,
        Validators.pattern("^[0-9]*$"),
        Validators.minLength(10), Validators.maxLength(10)]]
  });
}

get f() { return this.bookingForm.controls; }
book(Formvalue: NgForm) {
  this.submitted = true;
console.log(Formvalue);
this.api.bookcargo(this.bookingForm.value).subscribe((data) => {
  console.log(data);
})
alert("Successfully booked your cargo!!  Please wait for the further process");

// this.router.navigate(['']);
}


onReset() {
  this.submitted = false;
  this.bookingForm.reset();
}
  }
 

