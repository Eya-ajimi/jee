import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {
  friend = 
  {
    name:'',
    season:0,
    image :''
  }
friends : any[]=[];

 ajout ()
 {
   this.friends.push(this.friend)
  this.friend=
  {
    name:'',
    season:0,
    image :''
  }

  console.log(this.friends)


  
 }



}
