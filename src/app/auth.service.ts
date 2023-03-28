import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient:HttpClient) { }

  register(FormData: any): Observable <any>
  {
    return this._HttpClient.post("http://localhost:4500/api/data", FormData)
  }

  login(LoginData:any) : Observable <any>
  {
    return this._HttpClient.post("http://localhost:4500/api/login", LoginData);
  }

}
