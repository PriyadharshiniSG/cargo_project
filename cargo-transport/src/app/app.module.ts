import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavToolComponent } from './nav-tool/nav-tool.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { JoinUsComponent } from './join-us/join-us.component';
import { AdminnavComponent } from './adminnav/adminnav.component';
import { UsernavComponent } from './usernav/usernav.component';
import { BookingFormComponent } from './booking-form/booking-form.component';
import { BookingDetailsComponent } from './booking-details/booking-details.component';
import { SignupDetailsComponent } from './signup-details/signup-details.component';
import {ToastrModule} from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { CustomerStatusComponent } from './customer-status/customer-status.component';
import { LocationComponent } from './location/location.component';
import { ServicesComponent } from './services/services.component';
@NgModule({
  declarations: [
    AppComponent,
    NavToolComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    JoinUsComponent,
    AdminnavComponent,
    UsernavComponent,
    BookingFormComponent,
    BookingDetailsComponent,
    SignupDetailsComponent,
    CustomerStatusComponent,
    LocationComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
