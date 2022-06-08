import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }
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