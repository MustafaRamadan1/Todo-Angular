import { formatDate } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validator, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  error = "";
  constructor(private _authService: AuthService,private  _Router: Router){}
  loginForm = new FormGroup({
    email: new FormControl(null, [Validators.email, Validators.required]),
    password: new FormControl(null, [Validators.required])
  })

  submitForm(LoginData: FormGroup)
  {

    this._authService.login(LoginData.value).subscribe((response)=>{



      if (response.Massege === "Success")
      {
        localStorage.setItem("userToken", response.token);
        this._authService.saveUser();
        this._Router.navigate(["/home"]);

      }
      else
      {
        this.error = response.Massege;
        console.log(this.error);
      }
      
      

      console.log(response);
    })


  }

}
