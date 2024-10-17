import { Component } from '@angular/core';

interface Course{
  image: string;
  name: string;
  price:string;
  orgprice:string;
  stars:string;
}

@Component({
  selector: 'app-stage',
  templateUrl: './stage.component.html',
  styleUrl: './stage.component.css'
})
export class StageComponent {

  stage:Course[]=[
    {image:"About3.jpg",name:"Stage decoration",price:"35000",orgprice:"40000",stars:"4"},
    {image:"About4.jpg",name:"Stage decoration",price:"38000",orgprice:"43000",stars:"5"},
    // {image:"About4.jpg",name:"Stage decoration",price:"38000",orgprice:"43000",stars:"5"},
    {image:"All9.jpg",name:"Stage decoration",price:"75000",orgprice:"80000",stars:"5"},
    {image:"Stage2.jpg",name:"Stage decoration",price:"40000",orgprice:"45000",stars:"4"},
    {image:"Stage3.jpg",name:"Stage decoration",price:"39000",orgprice:"42000",stars:"3"},
    
    {image:"Stage5.jpg",name:"Stage decoration",price:"35000",orgprice:"38888",stars:"4"},
   
    {image:"Stage7.jpg",name:"Stage decoration",price:"40000",orgprice:"45888",stars:"4"},
    {image:"Stage8.jpg",name:"Stage decoration",price:"50000",orgprice:"59999",stars:"5"},
    {image:"Stage9.jpg",name:"Stage decoration",price:"35000",orgprice:"38000",stars:"4"},
    {image:"Stage10.jpg",name:"Stage decoration",price:"60000",orgprice:"68888",stars:"4"},
    {image:"Stage11.jpg",name:"Stage decoration",price:"25000",orgprice:"28888",stars:"3"},
    {image:"Stage12.jpg",name:"Stage decoration",price:"28000",orgprice:"30000",stars:"4"},
    {image:"Stage13.jpg",name:"Stage decoration",price:"40000",orgprice:"43000",stars:"4"},
    {image:"Stage14.jpg",name:"Stage decoration",price:"60000",orgprice:"64888",stars:"4"}
    
  ]
}
