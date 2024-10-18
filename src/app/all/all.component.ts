import { Component } from '@angular/core';



interface Course{
  image: string;
  name: string;
  price:string;
  orgprice:string;
  stars:string;
}

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrl: './all.component.css'
})
export class AllComponent {
  all:Course[] = [
    {image:"All1.jpg",name:"Baby Shower",price:"",orgprice:"",stars:"4"},
    {image:"All2.jpg",name:"Baby Shower",price:"",orgprice:"",stars:"4"},
    {image:"All3.jpg",name:"Stage Decoration",price:"",orgprice:"",stars:"4"},
    {image:"All4.jpg",name:"Stage Decoration",price:"",orgprice:"",stars:"5"},
    {image:"All5.jpg",name:"Stage Decoration",price:"",orgprice:"",stars:"4"},
    {image:"All6.jpg",name:"Stage Decoration",price:"",orgprice:"",stars:"4"},
    {image:"All7.jpg",name:"Stage Decoration",price:"",orgprice:"",stars:"4"},
    {image:"All8.jpg",name:"Stage Decoration",price:"",orgprice:"",stars:"4"},
    {image:"All9.jpg",name:"Stage Decoration",price:"",orgprice:"",stars:"5"},
    {image:"All10.jpg",name:"Stage Decoration",price:"",orgprice:"",stars:"5"},
    {image:"All11.jpg",name:"Stage Decoration",price:"",orgprice:"",stars:"5"},
    {image:"All12.jpg",name:"Stage Decoration",price:"",orgprice:"",stars:"5"},
    {image:"All13.jpg",name:"Stage Decoration",price:"",orgprice:"",stars:"5"},
    {image:"All14.jpg",name:"Stage Decoration",price:"",orgprice:"",stars:"5"}
  ];
}
