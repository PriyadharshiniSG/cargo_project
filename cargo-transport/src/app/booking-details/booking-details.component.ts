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
  departure: any;
  temp1:any;
  sample: any;
  location: any;
  constructor(private apis: ApiserviceService,private api:JoinUsService) { }
  ngOnInit(): void {
   localStorage.getItem("admin");
    
  this.id1 = localStorage.getItem("user");
    this.statusForm = new FormGroup({
      stats: new FormControl(),
   });
    this.fetchBookingData();
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
  fetchBookingData(){
    this.apis.getallBooking().subscribe(data=>{
      this.obj1 =[]
      this.mydata = data;
      this.obj1 = this.mydata =this.mydata.docs;
      this.temp1=this.obj1
      this.departure=this.obj1.map((el: { departure: any; })=>el.departure)
     this.departure = lodash.uniq(this.departure)
     this.api.getAllDocsByKey(this.departure).subscribe((res:any)=>{
      console.log(res)
      let datas =  res['rows'].map((x:any)=>x.doc)
      this.obj1.forEach((ele:any)=>{
        ele['departure']=lodash.find(datas,{'_id':ele['departure']});
      console.log("lookup",this.obj1);
      })
     })
     this.destinationid = this.obj1.map((ele: { destination: any; })=>ele.destination);
     this.destinationid = lodash.uniq(this.destinationid)
     this.api.getAllDocsByKey(this.destinationid).subscribe((res:any)=>{
        console.log(res)
        let ldata =  res['rows'].map((x:any)=>x.doc)
        this.obj1.forEach((ele:any)=>{
          ele['destination']=lodash.find(ldata,{'_id':ele['destination']});
        console.log("lookup",this.obj1);
        })
       },err=>{
        console.log("error",err);
       });
   
    },(rej1:string)=>{
      console.log(rej1);
    });
  }

}
