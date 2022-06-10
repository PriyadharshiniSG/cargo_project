import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
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
  mydata: any;
  obj:any=[];
  value:any;
  statsval: any;
  obj1: any;
  lid: any;
  id1: any;
  loading = false;
  destinationid =[];
  mydata1: any=[];
  constructor(private apis: ApiserviceService, private router: Router,private api:JoinUsService) { }
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
      this.obj1 = this.mydata
      return
    }
    this.obj1 = this.mydata.filter((x:any)=>x.status === Formvalue['stats'])
    console.log("filter:",this.obj1);
  }
  filterinData:any;
  fetchBookingData(){
    this.apis.getallBooking().subscribe(data=>{
      this.obj=[]
      this.mydata = data;
      this.obj = this.mydata =this.mydata.docs;
      console.log("object",this.obj);
    },(rej1:string)=>{
      console.log(rej1);
    });
  }
lookup(){
  this.obj1=[]
   this.api.getData("customer-booking", this.id1).subscribe((response)=>{
     console.log(response);
     this.mydata1 = response;
   this.obj1 =this.mydata1['docs'];
   const ex1 = lodash.uniq(this.obj1.forEach((item:any) => item['departure']))
   const destinationid = lodash.uniq(this.obj1.forEach((item:any) => item['destination']))
   this.lid = lodash.uniq(lodash.concat(ex1,destinationid));
     this.api.getviewType(this.lid).subscribe((resp:any)=>{
       console.log(resp);
       const ldata:any = resp.rows.forEach((ele:any)=>ele.doc)
       this.obj1.forEach((element:any) => {
         const location = ldata.filter((el:any)=>el['_id'] === element['departure'])[0]
         const destination = ldata.filter((el:any) =>el['_id'] === element['destination'])[0]
         element['departureData']=location
         element['destinationData']=destination
       }); 
       this.loading = true;
     },(rej:string)=>{
         console.log(rej);
       });
   console.log(this.obj1)
   },(rej:string)=>{
       console.log(rej);
     });
}
}
