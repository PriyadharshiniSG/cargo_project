import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class JoinUsService {
  endpoint =
  "https://aacd9391-7b8b-4ac4-b12c-6b785e540ced-bluemix.cloudantnosqldb.appdomain.cloud/";
  dbUsername = 'apikey-v2-2q4ay3thu4r9w4i4o1vr74ypzd4tyr1lzxlt9916cky2';
  dbPassword = 'bd763fb0b51e2d8e968a8154ae9b7869';
  basicAuth = 'Basic ' + btoa(this.dbUsername + ':' + this.dbPassword);
  temp:any;
  pusharray:any;
  array:any;
  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.basicAuth
    })
  };
  add(db:String,doc: object): Observable<{}> {

    console.log(doc);
    const url=this.endpoint+db;
    return this.http.post(url, doc, this.httpOptions)
  }
  // get(db:String,doc: object){
  //   const url=this.endpoint+doc+"/_all_docs?include-docs=true";
  //   return this.http.get(url, doc, this.httpOptions)
  // } 
  // retrieve(id:any)
  // {
  //   return this.http.get<any>('http://localhost:8000/getdata/'+id);
  // }
} 
