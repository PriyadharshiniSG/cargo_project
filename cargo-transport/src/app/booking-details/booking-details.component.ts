import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';
import { JoinUsService } from '../join-us.service';
import * as lodash from 'lodash'
@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.css']
})
export class BookingDetailsComponent implements OnInit {
  statusForm!: FormGroup
  mydata: any = [];
  obj:any=[];
  value:any;
  statsval: any;
  obj1: any;
  lid: any;
  id1: any;
  loading = false;
  destinationid =[];
  departureData:any;
  departureLocation:any;
  mydata1: any=[];
  constructor(private apis: ApiserviceService,private api:JoinUsService) { }
  ngOnInit(): void {
   localStorage.getItem("admin");
    
  this.id1 = localStorage.getItem("user");
    this.statusForm = new FormGroup({
      stats: new FormControl()
   });
    this.fetchBookingData();
     this.lookup()
  }
  onAccept(id:number,rev:number,status:string){
    this.api.get("cargo-registration/",id).subscribe((res:any)=>{
      console.log(res);
     res['status'] = status;
        this.api.updateData(res,"cargo-registration/",id,rev).subscribe(response=>{
      console.log(response);
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
      console.log("all",this.mydata1);
      for(const element of this.mydata1.docs)
      {
        this.obj1 = element;
        console.log("values in obj1",this.obj1);
      }
      this.obj1 = this.mydata1.docs;
      return 
    }
    this.obj1 = this.mydata.filter((x:any)=>x.status === Formvalue['stats'])
    console.log("filter:",this.obj);
  }
  filterinData:any;
  fetchBookingData(){
    this.apis.getallBooking().subscribe(data=>{
      this.obj1 =[]
      this.mydata = data;
      this.obj1 = this.mydata =this.mydata.docs;
      console.log("object",this.obj);
    },(rej1:string)=>{
      console.log(rej1);
    });
  }
lookup(){
  this.obj1=[]
  //  this.api.getData("customer-booking", this.id1).subscribe((response)=>{
  //    console.log(response);
  //    this.mydata1 = response;
  //    console.log("mydata1",this.mydata1);
  //  this.obj1 =this.mydata1.docs;
   console.log("mydatas1",this.obj1);
   const ex1 = lodash.uniq(this.obj1.map((item:any) => item['departure']))
   console.log("ex1",ex1);
   const destinationid = lodash.uniq(this.obj1.map((item:any) => item['destination']))
   this.lid = lodash.uniq(lodash.concat(ex1,destinationid));
     this.api.getviewType(this.lid).subscribe((resp:any)=>{
       console.log(resp);
       const ldata:any = resp.rows.map((ele:any)=>ele.doc)
       this.obj1.forEach((element:any) => {
        console.log("elements",element);
        
         const location = ldata.filter((x:any)=>x._id == element.departure)[0]
         const destination = ldata.filter((x:any)=>x._id == element.destination)[0]
         element['departure']=location.location
         element['destination']=destination.location
       }); 
       console.log(this.obj1)
       this.loading = true;
     },(rej:string)=>{
         console.log(rej);
       });
   console.log(this.obj1)
  //  },(rej:string)=>{
  //      console.log(rej);
  //    });
}
}
