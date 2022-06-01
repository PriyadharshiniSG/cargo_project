import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then(mod => mod.RegisterModule),
  },
  {
    path: '**',
    redirectTo: 'register'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), AppComponent], 
  exports: [RouterModule]
})
export class AppRoutingModule { }
