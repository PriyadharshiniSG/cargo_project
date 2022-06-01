import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { AboutComponentComponent } from './about-component/about-component.component';
import { CompanyServicesComponent } from './company-services/company-services.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavToolComponent } from './nav-tool/nav-tool.component';
import { JoinUsComponent } from './join-us/join-us.component';
import { SupportComponent } from './support/support.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    AboutComponentComponent,
    CompanyServicesComponent,
    NavToolComponent,
    JoinUsComponent,
    SupportComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
