import { Component, EventEmitter, Output } from '@angular/core';
import { HomeComponent } from '../home/home.component';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  @Output()

  ourFav = new EventEmitter();

  constructor(){}


  ourFavResualt()
  {
    this.ourFav.emit
  }

  
}
