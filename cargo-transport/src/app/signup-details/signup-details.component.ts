import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
@Component({
  selector: 'app-signup-details',
  templateUrl: './signup-details.component.html',
  styleUrls: ['./signup-details.component.css']
})
export class SignupDetailsComponent implements OnInit {
  mydata: any;
  obj:any=[];

  constructor(private api: ApiserviceService) { }

  ngOnInit(): void {
    localStorage.getItem("admin");     

    this.api.getallcustomers().subscribe(data=>{
      console.log('hmm',data)
      this.mydata = data;
      this.mydata =this.mydata.docs;
      for (const iterator of this.mydata) {
        this.obj.push(iterator);
      }
     
    })
  }

}
