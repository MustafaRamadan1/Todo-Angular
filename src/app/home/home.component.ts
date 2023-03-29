import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
ourData: any = "";
array : any[] = [];
deletedArray : any[] = [];
favArray: any[]=[];
  constructor(private _auth:AuthService){

  }

  add()
  {
    this.array.push(this.ourData);    
  }

  delete(i : any)
  {
    this.deletedArray.push(this.array[i]);

    this.array.splice(i,1);
    
  }

  fav(i:any)
  {
    this.favArray.push(this.array[i]);
    return this.favArray;
  }
  
}
