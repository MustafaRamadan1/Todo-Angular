import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import jwtDecode from 'jwt-decode';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(private _HttpClient:HttpClient, private _Router:Router) {

    if(localStorage.getItem("userToken") != null)
    {
      this.saveUser();
    }
   }

  CurrentUser = new BehaviorSubject(null);

  saveUser()
  {
    let token : any = localStorage.getItem("userToken");

    this.CurrentUser.next(jwtDecode(token));

      console.log(this.CurrentUser);
  }


  register(FormData: any): Observable <any>
  {
    return this._HttpClient.post("http://localhost:4500/api/data", FormData)
  }

  login(LoginData:any) : Observable <any>
  {
    return this._HttpClient.post("http://localhost:4500/api/login", LoginData);
  }

  logout()
  {
    this.CurrentUser.next(null);
    localStorage.removeItem("userToken");
    this._Router.navigate(["/login"]);
  }

}
