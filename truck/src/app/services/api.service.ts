import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private afs: AngularFirestore) { }

  // Pricing
  getPrice(dest:any){
   return this.afs.collection('pricing', ref => ref.where('to','==',dest)).snapshotChanges();
  }

  getPricingById(id: string){
    return this.afs.doc('pricing/'+id).valueChanges();
  }

  getRates(id:any){
    return this.afs.collection('rates', ref => ref.where('id','==',id)).valueChanges();
  }

  // Create Username
  createUser(uid:any, data:any){
    return this.afs.doc('users/'+uid).set(data);
  }

  //get User
  getUser(uid:any){
    return this.afs.doc('users/'+uid).valueChanges();
  }

  //get User data with meta
  getUserProfile(uid:any){
    return this.afs.doc('users/'+uid).snapshotChanges();
  }

  //Update User
  updateUser(uid:any,data:any){
    return this.afs.doc('users/'+uid).set(data);
  }

  //retrieve country data
  getCountryName(dest:any){
    return this.afs.collection('pricing', ref => ref.where('to','==',dest)).snapshotChanges();
  }
  //get price
  getCountryPrices(id:any,weight:any){      
    return this.afs.collection('rates', ref => ref.where('id','==',id).where('maxweight','>=',weight)).snapshotChanges();
  }

  setBill(order:any){
    return this.afs.collection('orders').add(order);
  }

  processPayment(id:any,amount:any,token: any){
    const payment = {id: id, token, amount};
    return this.afs.collection('payments').add(payment);
  }

  processPayment1(id:any,amount:any){
    const payment = {id: id, amount};
    return this.afs.collection('payments').add(payment);
  }

  //return orders by id
  getOrder(uid:any){
    return this.afs.collection('orders', ref=> ref.where('userId', '==', uid)).snapshotChanges();
  }

  getBoxes(){
    return this.afs.collection('box').valueChanges();
  }

  getNewOrders(){
    return this.afs.collection('neworders').valueChanges();
  }
  
  createOrder(data:any){
    return this.afs.collection('neworders').add(data);
  }

  getNewOrdersById(id:any){
    return this.afs.collection('neworders', ref => ref.where('userid','==',id)).valueChanges();
  }

  getOrdersById(id:any){
    return this.afs.collection('orders', ref=> ref.where('userid','==',id)).valueChanges()
  }

  getNewOrderByOrderId(id:any){
    return this.afs.collection('neworders', ref => ref.where('orderid','==',id)).valueChanges();
  }

  getOrderByOrderId(id:any){
    return this.afs.collection('orders', ref => ref.where('orderid','==',id)).valueChanges();
  }

  getTrackingInformation(id:any){
    return this.afs.doc('tracking/'+id).valueChanges();
  }

  contactUs(data:any){
    return this.afs.collection('contactus').add(data);
  }



}