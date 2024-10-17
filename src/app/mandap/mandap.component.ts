import { Component } from '@angular/core';

interface Course{
  image: string;
  name: string;
  price:string;
  orgprice:string;
  stars:string;
}

@Component({
  selector: 'app-mandap',
  templateUrl: './mandap.component.html',
  styleUrl: './mandap.component.css'
})
export class MandapComponent {
  mandap:Course[] = [
    {image:"mandap.jpg",name:"Mandap",price:"10000",orgprice:"18888",stars:"4"},
    {image:"mandap1.jpg",name:"Mandap",price:"18000",orgprice:"18888",stars:"4"},
    {image:"mandap2.png",name:"Mandap",price:"20000",orgprice:"28888",stars:"4"},
    {image:"mandap3.webp",name:"Mandap",price:"10000",orgprice:"14000",stars:"5"},
    {image:"mandap4.jpg",name:"Mandap",price:"10000",orgprice:"15000",stars:"4"},
    {image:"mandap5.webp",name:"Mandap",price:"12000",orgprice:"16690",stars:"4"},
    {image:"mandap6.jpg",name:"Mandap",price:"15000",orgprice:"18888",stars:"4"},
    {image:"mandap7.jpg",name:"Mandap",price:"8000",orgprice:"16888",stars:"4"},
    {image:"mandap8.jpg",name:"Mandap",price:"20000",orgprice:"28888",stars:"5"}
  ];
}
