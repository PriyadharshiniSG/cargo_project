import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(){ }

  login(email:any, password:any){
    return  this.auth.auth.signInWithEmailAndPassword(email,password);
  }

  signup(email:any,password:any){
    return this.auth.auth.createUserWithEmailAndPassword(email,password);

  }

  sendVerificationEmail(){
    return this.auth.auth.currentUser.sendEmailVerification();
  }

  setPersistance(){
    return this.auth.auth.setPersistence(firebase.auth.Auth.Persistence.SESSION);
  }

  forgotPassword(email:any){
    return this.auth.auth.sendPasswordResetEmail(email);
  }

  logout(){
    this.auth.auth.signOut();
  }

  checkLoginStatus(){
    return this.auth.authState;
  }
  
}