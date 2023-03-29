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


  constructor(private _AuthService: AuthService , public _Router:Router){}

    error: string = "";
    registerFrom  = new FormGroup({
      quote : new FormControl(null, [Validators.minLength(5), Validators.maxLength(15), Validators.required]), 
    email : new FormControl(null, [Validators.email, Validators.required]), 
    password: new FormControl(null,[Validators.required])

  })

  submitRegisterForm(FormDetails: FormGroup)
  {
    console.log("Submit");
    this._AuthService.register(FormDetails.value).subscribe((response)=>{
      if (response.Massege === "Success")
      {
        this._Router.navigate(['/login'])
      }
     
      else
      {
        this.error = response.error;
      }
      console.log(localStorage.length);

      
      // this._Router.navigate(['/login'])

      console.log(this.error);
    } , (error:Error)=>{console.log(error.message)}, ()=>{console.log("Done")})
  }



}
