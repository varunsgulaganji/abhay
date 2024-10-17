import { Component } from '@angular/core';

interface Course{
  image: string;
  name: string;
  price:string;
  orgprice:string;
  stars:string;
}

@Component({
  selector: 'app-leaves',
  templateUrl: './leaves.component.html',
  styleUrl: './leaves.component.css'
})
export class LeavesComponent {
leaves:Course[]=[
  {image:"na4.jpg",name:"Stage decoration",price:"10000",orgprice:"18888",stars:"4"},
  {image:"na4.jpg",name:"Stage decoration",price:"10000",orgprice:"18888",stars:"3"},
  {image:"na4.jpg",name:"Stage decoration",price:"10000",orgprice:"18888",stars:"2"},
  {image:"na4.jpg",name:"Stage decoration",price:"10000",orgprice:"18888",stars:"1"},
  {image:"na4.jpg",name:"Stage decoration",price:"10000",orgprice:"18888",stars:"4"}
];
}
