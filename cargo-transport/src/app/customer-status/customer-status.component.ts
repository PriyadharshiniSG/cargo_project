import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../book.service';
import { JoinUsService } from '../join-us.service';
// import {} from './../booking-details/booking-details.component'
@Component({
  selector: 'app-customer-status',
  templateUrl: './customer-status.component.html',
  styleUrls: ['./customer-status.component.css']
})
export class CustomerStatusComponent implements OnInit {
  mydata: any;
  obj:any=[];
  id1:any;
  res: any;
  constructor(private book: BookService, private router: Router,private api:JoinUsService) { }

  ngOnInit(): void {
     this.id1 = localStorage.getItem("user");
     this.obj=[]
     this.api.get("cargo-registration/", this.id1).subscribe((res:any)=>{
      console.log(res);
      this.api.getData("customer-booking", this.id1).subscribe((res)=>{
        console.log(res);
        this.mydata = res;
      this.mydata =this.mydata.docs;
      for (const iterator of this.mydata) {
        this.obj.push(iterator);
      }
      })
    },(rej:string)=>{
      console.log(rej);
    });
   
  }

}
