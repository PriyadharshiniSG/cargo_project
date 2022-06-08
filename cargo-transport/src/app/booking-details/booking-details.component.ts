import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { BookService } from '../book.service';
import { JoinUsService } from '../join-us.service';

@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.css']
})
export class BookingDetailsComponent implements OnInit {
  statusForm!: FormGroup
  mydata: any;
  obj:any=[];
  value:any;
  statsval: any;
  constructor(private book: BookService, private router: Router,private api:JoinUsService) { }

  ngOnInit(): void {
    localStorage.getItem("admin");     
    this.statusForm = new FormGroup({
      stats: new FormControl()
   });
    this.fetchBookingData();
    
    // this.filter("Booking Accepted")
  }
  
  onAccept(id:number,rev:number,status:string){
    // if()
    this.api.get("cargo-registration/",id).subscribe((res:any)=>{
      console.log(res);
     res['status'] = status;
        this.api.updateData(res,"cargo-registration/",id,rev).subscribe(res=>{
      console.log(res);
      
    this.fetchBookingData()
    },(rej:string)=>{
      console.log(rej);
      
    })
    },(rej:string)=>{
      console.log(rej);
    });
    
  }
  filter(Formvalue: any){
    if(Formvalue.stats === "All"){
      this.obj = this.mydata
      return
    }
    this.obj = this.mydata.filter((x:any)=>x.status === Formvalue['stats'])

  }
  filterinData:any;
  fetchBookingData(){
    this.book.getallBooking().subscribe(data=>{
      // var length = data;
      this.obj=[]
      console.log('hmm',data)
      this.mydata = data;
      this.obj = this.mydata =this.mydata.docs;

      // for (const iterator of this.mydata) {
      //   this.obj.push(iterator);
      // }

     
    })
  }

}
