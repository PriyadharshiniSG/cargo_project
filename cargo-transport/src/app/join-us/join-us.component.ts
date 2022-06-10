import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder} from '@angular/forms';
import { JoinUsService } from '../join-us.service';
@Component({
  selector: 'app-join-us',
  templateUrl: './join-us.component.html',
  styleUrls: ['./join-us.component.css']
})
export class JoinUsComponent implements OnInit {
  formGroup! : FormGroup;
  record: any ={
    name:'',
    email:'',
    phone:'',
    message:'',
  };
  constructor(private fb: FormBuilder, private api:JoinUsService) { }
  ngOnInit(): void {
    this.formGroup = this.fb.group({
      name: [this.record.name],
      email: [this.record.email],
      phone:[this.record.phone],
      message: [this.record.message],
      type: 'join-us'
    });
  }
  get name() {
    return this.formGroup.get('name')!;
  }
  get email() {
    return this.formGroup.get('email')!;
  }
  get phone(){
    return this.formGroup.get('phone')!;
  }
  get message(){
    return this.formGroup.get('message')!;
  }
  storing(){
    this.api.add("cargo-registration",this.formGroup.value).subscribe(res=>{
      console.log(res);
      alert("Your request was received successfully!");
    },(rej: string)=>{
      alert("oops! Cannot post request"+rej);
    });
  }
}




  
  