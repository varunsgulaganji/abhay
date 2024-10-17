import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-decoration-card',
  templateUrl: './decoration-card.component.html',
  styleUrl: './decoration-card.component.css'
})
export class DecorationCardComponent {

  @Input("src") course: any = ""
  expand:boolean = false;
  register:boolean = false;

  

  public onexpand(){
    this.expand = !this.expand
  }

  
   public onregister(){
    this.register = !this.register

  }
}
