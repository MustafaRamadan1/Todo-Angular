import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  data = {
    name: 'John Doe',
    username: 'johndoe',
    email: 'johndoe@example.com'
  };
  
  constructor(private _HttpClient:HttpClient) { }

  register(FormData: any): Observable <any>
  {
    return this._HttpClient.post("https://jsonplaceholder.typicode.com/users", FormData)
  }
}
  