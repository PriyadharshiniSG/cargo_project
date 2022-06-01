import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { CargoComponent } from './cargo/cargo.component';
import { DriversEntryComponent } from './drivers-entry/drivers-entry.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { TrackComponent } from './track/track.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    CargoComponent,
    DriversEntryComponent,
    RegisterComponent,
    LoginComponent,
    TrackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
