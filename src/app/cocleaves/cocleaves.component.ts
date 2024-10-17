import { Component } from '@angular/core';

interface Course{
  image: string;
  name: string;
  price:string;
  orgprice:string;
  stars:string;
}

@Component({
  selector: 'app-cocleaves',
  templateUrl: './cocleaves.component.html',
  styleUrl: './cocleaves.component.css'
})
export class CocleavesComponent {

  cocleaves:Course[] = [
    {image:"cocleaves1.jpg",name:"Coconut Chappra",price:"7000",orgprice:"8888",stars:"4"},
    {image:"cocleaves2.jpg",name:"Coconut Chappra",price:"25000",orgprice:"30000",stars:"4"},
    {image:"cocleaves3.jpg",name:"Coconut Chappra",price:"18000",orgprice:"25000",stars:"4"},
    {image:"cocleaves4.jpg",name:"Coconut Chappra",price:"8000",orgprice:"10000",stars:"4"},
    {image:"cocleaves5.jpg",name:"Coconut Chappra",price:"10000",orgprice:"13888",stars:"4"},
    {image:"cocleaves6.jpg",name:"Coconut Chappra",price:"12000",orgprice:"14888",stars:"4"},
    // {image:"cocleaves7.jpg",name:"Stage decoration",price:"10000",orgprice:"18888",stars:"4"},
    {image:"cocleaves8.jpg",name:"Coconut Chappra",price:"9000",orgprice:"11000",stars:"4"},
    {image:"cocleaves9.jpg",name:"Coconut Chappra",price:"7000",orgprice:"9000",stars:"4"},
    {image:"cocleaves10.jpg",name:"Coconut Chappra",price:"11000",orgprice:"14888",stars:"4"},
    {image:"cocleaves11.jpg",name:"Coconut Chappra",price:"6000",orgprice:"8888",stars:"4"},
    {image:"cocleaves12.jpg",name:"Coconut Chappra",price:"20000",orgprice:"25777",stars:"4"},
    // {image:"cocleaves13.jpg",name:"Stage decoration",price:"10000",orgprice:"18888",stars:"4"},
    // {image:"cocleaves14.jpg",name:"Stage decoration",price:"10000",orgprice:"18888",stars:"4"},
    // {image:"cocleaves15.jpg",name:"Stage decoration",price:"10000",orgprice:"18888",stars:"4"},
    // {image:"cocleaves16.jpg",name:"Stage decoration",price:"10000",orgprice:"18888",stars:"4"},
    {image:"cocleaves17.jpg",name:"Coconut Chappra",price:"10000",orgprice:"13000",stars:"4"},
    {image:"cocleaves18.jpg",name:"Coconut Chappra",price:"25000",orgprice:"28888",stars:"4"},
    // {image:"cocleaves19.jpg",name:"Stage decoration",price:"10000",orgprice:"18888",stars:"4"},
    {image:"cocleaves20.jpg",name:"Coconut Chappra",price:"13000",orgprice:"15888",stars:"4"}
  ];
}
