import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../book.service';
@Component({
  selector: 'app-signup-details',
  templateUrl: './signup-details.component.html',
  styleUrls: ['./signup-details.component.css']
})
export class SignupDetailsComponent implements OnInit {
  mydata: any;
  obj:any=[];

  constructor(private book: BookService, private router: Router) { }

  ngOnInit(): void {
    this.book.getallcustomers().subscribe(data=>{
      console.log('hmm',data)
      this.mydata = data;
      this.mydata =this.mydata.docs;
      for (const iterator of this.mydata) {
        this.obj.push(iterator);
      }
     
    })
  }

}
