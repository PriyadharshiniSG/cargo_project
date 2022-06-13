import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  constructor(private http: HttpClient) { 
    }
  enroll(formobject: any) {
    return this.http.post('http://localhost:8000/send/',formobject);
  }
  retrieve(){
    return this.http.get('http://localhost:8000/getdata/');
  }
  getadmin(){
    return this.http.get('http://localhost:8000/getadmin/');
  }
  bookcargo(formobject: any) { 
    return this.http.post('http://localhost:8000/book/',formobject);
  }
  getallBooking(){
    return this.http.get('http://localhost:8000/getbookingdata/');
  }
  getallcustomers(){
    return this.http.get('http://localhost:8000/getdata/');
  }
}
