import { Component } from '@angular/core';

interface Course{
  image: string;
  name: string;
  price:string;
  orgprice:string;
  stars:string;
}

@Component({
  selector: 'app-housedeco',
  templateUrl: './housedeco.component.html',
  styleUrl: './housedeco.component.css'
})
export class HousedecoComponent {

  housedeco:Course[]=[
    {image:"housedecor.jpg",name:"housedecor",price:"7000",orgprice:"8888",stars:"4"},
    {image:"housedecor2.webp",name:"housedecor",price:"8000",orgprice:"10000",stars:"3"},
    {image:"housedecor3.jpg",name:"housedecor",price:"5000",orgprice:"7888",stars:"4"},
    {image:"housedecor4.jpg",name:"housedecor",price:"9000",orgprice:"12000",stars:"4"},
    {image:"housedecor5.jpg",name:"housedecor",price:"4000",orgprice:"6000",stars:"4"},
    {image:"housedecor6.jpg",name:"housedecor",price:"3500",orgprice:"5000",stars:"4"}
  ];
}
