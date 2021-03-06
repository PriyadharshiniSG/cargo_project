import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavToolComponent } from './nav-tool/nav-tool.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { JoinUsComponent } from './join-us/join-us.component';
import { AdminnavComponent } from './adminnav/adminnav.component';
import { UsernavComponent } from './usernav/usernav.component';
import { BookingDetailsComponent } from './booking-details/booking-details.component';
import { BookingFormComponent } from './booking-form/booking-form.component';
import { SignupDetailsComponent } from './signup-details/signup-details.component';
import { CustomerStatusComponent } from './customer-status/customer-status.component';
import { LocationComponent } from './location/location.component';
import { ServicesComponent } from './services/services.component';
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'nav-tool', component: NavToolComponent },
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'join-us', component: JoinUsComponent },
  { path: 'adminnav', component: AdminnavComponent },
  { path: 'usernav',component: UsernavComponent },
  { path: 'booking-details', component: BookingDetailsComponent },
  { path: 'booking-form', component: BookingFormComponent },
  { path: 'signup-details', component: SignupDetailsComponent },
  { path: 'customer-status', component: CustomerStatusComponent },
  { path: 'location', component: LocationComponent },
  { path: 'services', component: ServicesComponent },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
