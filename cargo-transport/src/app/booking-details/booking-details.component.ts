import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../book.service';
@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.css']
})
export class BookingDetailsComponent implements OnInit {
  mydata: any;
  obj:any=[];
  constructor(private book: BookService, private router: Router) { }

  ngOnInit(): void {
    this.book.getallBooking().subscribe(data=>{
      // var length = data;
      console.log('hmm',data)
      this.mydata = data;
      this.mydata =this.mydata.docs;
      for (const iterator of this.mydata) {
        this.obj.push(iterator);
      }
     
    })
  }

}
