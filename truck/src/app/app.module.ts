import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './dashboard/about-us/about-us.component';
import { ContactUsComponent } from './dashboard/contact-us/contact-us.component';
import { CountriesComponent } from './dashboard/countries/countries.component';
import { CreateDialogComponent } from './dashboard/create-dialog/create-dialog.component';
import { CreateNewComponent } from './dashboard/create-new/create-new.component';
import { HomeComponent } from './dashboard/home/home.component';
import { OrdersComponent } from './dashboard/orders/orders.component';
import { TrackingComponent } from './dashboard/tracking/tracking.component';
import { LoginComponent } from './entry/login/login.component';
import { SignupComponent } from './entry/signup/signup.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavbarComponent } from './shared/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    ContactUsComponent,
    CountriesComponent,
    CreateDialogComponent,
    CreateNewComponent,
    HomeComponent,
    OrdersComponent,
    TrackingComponent,
    LoginComponent,
    SignupComponent,
    FooterComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
