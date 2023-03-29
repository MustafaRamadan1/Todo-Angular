import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  isLogin: boolean = false;
  
    constructor(private _authService: AuthService)
    {

      console.log(this.isLogin);
      this._authService.CurrentUser.subscribe(()=>{

      if (_authService.CurrentUser.getValue != null)
      {

        this.isLogin = true;

        if (localStorage.length  === 0)
        {
          this.isLogin = false;
        }

      }
      else 
      {

        this.isLogin = false;
      }
      });
      

    }

    
    islogout()
    {
      this._authService.logout();
    }
  

}
