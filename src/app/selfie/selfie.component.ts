import { Component } from '@angular/core';


interface Course{
  image: string;
  name: string;
  price:string;
  orgprice:string;
  stars:string;
}

@Component({
  selector: 'app-selfie',
  templateUrl: './selfie.component.html',
  styleUrl: './selfie.component.css'
})
export class SelfieComponent {

  selfie:Course[]=[
    {image:"selfie1.jpg",name:"Selfie",price:"3500",orgprice:"5000",stars:"4"},
    {image:"selfie2.jpg",name:"Selfie",price:"6500",orgprice:"8000",stars:"4"},
    {image:"selfie3.jpg",name:"Selfie",price:"3000",orgprice:"4000",stars:"4"},
    {image:"selfie4.jpg",name:"Selfie",price:"4000",orgprice:"5000",stars:"4"},
    {image:"selfie5.jpg",name:"Selfie",price:"3000",orgprice:"5000",stars:"4"},
    {image:"selfie6.jpg",name:"Selfie",price:"4500",orgprice:"5000",stars:"4"},
    {image:"selfie7.jpg",name:"Selfie",price:"8000",orgprice:"10000",stars:"4"},
    {image:"selfie8.jpg",name:"Selfie",price:"5000",orgprice:"7000",stars:"4"},
    {image:"selfie9.jpg",name:"Selfie",price:"4000",orgprice:"6000",stars:"5"},
    {image:"selfie10.jpg",name:"Selfie",price:"7000",orgprice:"8000",stars:"5"},
    {image:"selfie11.jpg",name:"Selfie",price:"3500",orgprice:"5000",stars:"5"},
    {image:"selfie12.jpg",name:"Selfie",price:"4500",orgprice:"6000",stars:"5"}
    
  ]
}
