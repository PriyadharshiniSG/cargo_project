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
  add(db:string,doc: object): Observable<{}> {
    console.log(doc);
    const url=this.endpoint+db;
    return this.http.post(url, doc, this.httpOptions)
  }
  get(db:string, id:number): Observable<{}>{
    const url = this.endpoint+db+id;
    return this.http.get(url, this.httpOptions)
  }
  getData(type: string, id: any,email?:string) {
    let url = this.endpoint + 'cargo-registration/_find';
    let typedData:any=[]
    if(email && email!== null && email.length !== 0){
       typedData={
        selector: {
          type: type,
          email: email
        }
      };
    }
    else{
     typedData = {
      selector: {
        type: type,
        user: id,
      }
    };
  }
    return this.http.post(url, typedData, this.httpOptions)
  }
  updateData(changedValue:object, db: string, id: number, rev: number) {

    const changeObj = changedValue;
    const url = `${this.endpoint + db}/${id}?rev=${rev}`;
    return this.http.put(url, changeObj, this.httpOptions);
  }
 getstatus(type:string){
   let data = {
     "keys": [type ],
      "include_docs":true
    }
    const url = this.endpoint + "cargo-registration/_design/filterbytype/_view/filterbytype" ;
    return this.http.post(url,data,this.httpOptions)
 }
 getviewType(id:number){
  let data = {
    "keys": id , 
     "include_docs":true
   }
   const url = this.endpoint + "cargo-registration/_all_docs?include_docs=true" ;
   return this.http.post(url,data,this.httpOptions)
}
getAllDocsByKey(arrayKey:any){
  const url = `${this.endpoint}cargo-registration/_all_docs?include_docs=true&keys=["`+arrayKey.join('","')+`"]`;
  return this.http.get(url,this.httpOptions)

}
} 
