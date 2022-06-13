import { Component, OnInit } from '@angular/core';
import { JoinUsService } from '../join-us.service';
import * as lodash from 'lodash'
@Component({
  selector: 'app-customer-status',
  templateUrl: './customer-status.component.html',
  styleUrls: ['./customer-status.component.css']
})
export class CustomerStatusComponent implements OnInit {
  lid:any;
  mydata: any=[];
  obj:any=[];
  id1:any;
  res: any;
  temp: any;
  destinationid =[];
  loading = false;
  constructor(private api:JoinUsService) { }
  ngOnInit(): void {
     this.id1 = localStorage.getItem("user");
     this.obj=[]
      this.api.getData("customer-booking", this.id1).subscribe((response)=>{
        console.log(response);
        this.mydata = response;
      this.obj =this.mydata['docs'];
      const ex1 = lodash.uniq(this.obj.map((item:any) => item['departure']))
      const destinationid = lodash.uniq(this.obj.map((item:any) => item['destination']))
      this.lid = lodash.uniq(lodash.concat(ex1,destinationid));
        this.api.getviewType(this.lid).subscribe((resp:any)=>{
          console.log(resp);
          const ldata:any = resp.rows.map((ele:any)=>ele.doc)
          this.obj.forEach((element:any) => {
            console.log("elements",element);
            const location = ldata.filter((el:any)=>el['_id'] === element['departure'])[0]
            const destination = ldata.filter((el:any) =>el['_id'] === element['destination'])[0]
            element['departureData']=location
            element['destinationData']=destination
          }); 
          this.loading = true;
        },(rej:string)=>{
            console.log(rej);
          });
      console.log(this.obj)
      },(rej:string)=>{
          console.log(rej);
        });
    }
  }


