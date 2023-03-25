import { formatDate } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validator, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private _Router: Router){}
  loginForm = new FormGroup({
    email: new FormControl(null, [Validators.email, Validators.required]), 
    password: new FormControl(null, [Validators.required])
  })

  submitForm(FormData: any)
  {
    this._Router.navigate(["/home"]);
  }

}
