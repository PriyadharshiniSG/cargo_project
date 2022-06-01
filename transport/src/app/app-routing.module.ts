import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { CargoComponent } from './cargo/cargo.component';
import { DriversEntryComponent } from './drivers-entry/drivers-entry.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { TrackComponent } from './track/track.component';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'nav-bar', component: NavBarComponent },
  { path: 'home', component: HomeComponent },
  { path: 'cargo', component: CargoComponent },
  { path: 'drivers-entry', component: DriversEntryComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'track', component: TrackComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
