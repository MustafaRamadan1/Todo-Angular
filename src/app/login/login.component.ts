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

  constructor(private _authService: AuthService,private  _Router: Router){}
  loginForm = new FormGroup({
    email: new FormControl(null, [Validators.email, Validators.required]),
    password: new FormControl(null, [Validators.required])
  })

  submitForm(LoginData: FormGroup)
  {

    this._authService.login(LoginData).subscribe((response)=>{

      
      this._Router.navigate(["/home"]);

      console.log(response);
    })


  }

}
