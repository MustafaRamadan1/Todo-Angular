import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NetworkComponent } from './network/network.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path:"", redirectTo:"home", pathMatch:"full"},
  {path:"home"  , canActivate:[AuthGuard], component:HomeComponent}, 
  {path:"about" ,component:AboutComponent}, 
  {path:"network" , canActivate:[AuthGuard],component:NetworkComponent},
  {path:"register" , canActivate:[AuthGuard],component:RegisterComponent},
  {path: "login", component:LoginComponent},
  {path: "logout",component:LogoutComponent},
  {path:"**",component:NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
