import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private _authService: AuthService, private _Router: Router){}
   
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

        if(this._authService.CurrentUser.getValue != null)
        {
          return true;
          
        }

        else
        { 
          console.log(this._authService.CurrentUser.getValue());
          this._Router.navigate(["/login"]);
          return false;
        }
  }
  
}
