import { Component } from '@angular/core';

@Component({
  selector: 'app-decoration',
  templateUrl: './decoration.component.html',
  styleUrl: './decoration.component.css'
})
export class DecorationComponent {

  category:string =""

  public onclick(crs:any){
    this.category=crs
  }

  crssections:string[]=["Platform","Canopy","Bridal Entrance","Ambient Lighting","Interior Decor","Selfie Stand","Palm Fronds","ALL"]
}
