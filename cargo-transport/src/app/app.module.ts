import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavToolComponent } from './nav-tool/nav-tool.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { CargoTrackingComponent } from './cargo-tracking/cargo-tracking.component';
import { JoinUsComponent } from './join-us/join-us.component';
import { AdminnavComponent } from './adminnav/adminnav.component';
import { UsernavComponent } from './usernav/usernav.component';
import { BookingFormComponent } from './booking-form/booking-form.component';
import { BookingDetailsComponent } from './booking-details/booking-details.component';
import { DriverDetailsComponent } from './driver-details/driver-details.component';
import { SignupDetailsComponent } from './signup-details/signup-details.component';
@NgModule({
  declarations: [
    AppComponent,
    NavToolComponent,
    HomeComponent,
    HeaderComponent,
    AboutUsComponent,
    RegisterComponent,
    LoginComponent,
    FooterComponent,
    CargoTrackingComponent,
    JoinUsComponent,
    AdminnavComponent,
    UsernavComponent,
    BookingFormComponent,
    BookingDetailsComponent,
    DriverDetailsComponent,
    SignupDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
