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
}
