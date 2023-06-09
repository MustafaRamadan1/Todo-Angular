import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NetworkComponent } from './network/network.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule}   from "@angular/common/http";
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
@NgModule({

  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NetworkComponent,
    RegisterComponent,
    NavbarComponent,
    NotFoundComponent,
    LoginComponent,
    LogoutComponent,
    
    
    ]
    , 
  
  imports: [
    BrowserModule,
    AppRoutingModule, ReactiveFormsModule, 
    HttpClientModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
