import { Component } from '@angular/core';

interface Course{
  image: string;
  name: string;
  price:string;
  orgprice:string;
  stars:string;
}

@Component({
  selector: 'app-coupleentrance',
  templateUrl: './coupleentrance.component.html',
  styleUrl: './coupleentrance.component.css'
})
export class CoupleentranceComponent {
   couple: Course[]=[
    {image:"couple1.jpg",name:"Couple",price:"6000",orgprice:"8888",stars:"4"},
    {image:"couple2.jpg",name:"Couple",price:"12000",orgprice:"16000",stars:"4"},
    {image:"couple3.jpg",name:"Couple",price:"8000",orgprice:"10000",stars:"4"},
    // {image:"couple4.jpg",name:"Couple",price:"10000",orgprice:"18888",stars:"1"},
    {image:"couple5.jpg",name:"Couple",price:"13000",orgprice:"15000",stars:"4"},
    {image:"couple6.jpg",name:"Couple",price:"6000",orgprice:"8999",stars:"4"},
    {image:"couple7.jpg",name:"Couple",price:"15000",orgprice:"17000",stars:"4"},
    {image:"couple8.png",name:"Couple",price:"9000",orgprice:"13000",stars:"4"},
    // {image:"couple9.jpg",name:"Couple",price:"10000",orgprice:"18888",stars:"4"},
    {image:"couple10.jpg",name:"Couple",price:"12000",orgprice:"15000",stars:"4"},
    {image:"couple11.jpg",name:"Couple",price:"12000",orgprice:"14000",stars:"4"},
    // {image:"couple12.jpg.crdownload",name:"Couple",price:"10000",orgprice:"18888",stars:"4"},
    {image:"couple13.jpg",name:"Couple",price:"8000",orgprice:"11000",stars:"4"},
    {image:"couple14.jpg",name:"Couple",price:"14000",orgprice:"15000",stars:"4"},
    {image:"couple15.jpg",name:"Couple",price:"10000",orgprice:"12000",stars:"4"}
   ];
}
