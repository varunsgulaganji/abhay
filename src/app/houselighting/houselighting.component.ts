import { Component } from '@angular/core';

interface Course{
  image: string;
  name: string;
  price:string;
  orgprice:string;
  stars:string;
}

@Component({
  selector: 'app-houselighting',
  templateUrl: './houselighting.component.html',
  styleUrl: './houselighting.component.css'
})
export class HouselightingComponent {

  houselight:Course[] = [
    {image:"contact.webp",name:"Houselighting",price:"12000",orgprice:"18888",stars:"4"},
    {image:"houseligh1.jpg",name:"Houselighting",price:"20000",orgprice:"25000",stars:"5"},
    {image:"houseligh2.jpg",name:"Houselighting",price:"18000",orgprice:"18888",stars:"5"},
    {image:"houseligh3.jpg",name:"Houselighting",price:"12000",orgprice:"16000",stars:"4"},
    {image:"houseligh4.jpg",name:"Houselighting",price:"15000",orgprice:"18888",stars:"4"},
    {image:"houseligh5.jpg",name:"Houselighting",price:"9000",orgprice:"12000",stars:"4"},
    {image:"houseligh6.jpg",name:"Houselighting",price:"9000",orgprice:"11000",stars:"4"},
    {image:"houseligh7.jpg",name:"Houselighting",price:"18000",orgprice:"20000",stars:"4"},
    {image:"houseligh8.webp",name:"Houselighting",price:"8000",orgprice:"10000",stars:"4"},
    {image:"houseligh9.jpg",name:"Houselighting",price:"13000",orgprice:"15000",stars:"4"},
    {image:"houseligh10.jpg",name:"Houselighting",price:"12000",orgprice:"13000",stars:"4"},
    {image:"houseligh11.avif",name:"Houselighting",price:"6000",orgprice:"8888",stars:"4"}
  ];
}
