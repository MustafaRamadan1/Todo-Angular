import { Component } from '@angular/core';
import { FormControl, FormGroup, Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {


  constructor(private _AuthService: AuthService , private _Router:Router){}

    error: string = "";
    registerFrom  = new FormGroup({
    first_name : new FormControl(null, [Validators.minLength(3), Validators.maxLength(10), Validators.required]), 
    last_name : new FormControl(null, [Validators.minLength(3), Validators.maxLength(10), Validators.required]), 
    age : new FormControl(null, [Validators.required, Validators.min(16), Validators.max(80)]), 
    email : new FormControl(null, [Validators.email, Validators.required]), 
    password: new FormControl(null,[Validators.required])

  })

  submitRegisterForm(FormDetails: FormGroup)
  {
    this._AuthService.register(FormDetails.value).subscribe((response)=>{
      // if (response.message === "success")
      // {
      //   this._Router.navigate(['/login'])
      // }
     

      // console.log(response)
      this._Router.navigate(['/login'])

      console.log(response)
    })
  }

}
