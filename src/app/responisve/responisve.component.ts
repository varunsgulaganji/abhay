import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-responisve',
  templateUrl: './responisve.component.html',
  styleUrl: './responisve.component.css'
})
export class ResponisveComponent implements OnInit {
  
  
    images = [
      { src: '../../assets/img/pic1.jpg', alt: 'Image 1' },
      { src: '../../assets/img/pic2.jpeg', alt: 'Image 2' },
      { src: '../../assets/img/pic3.jpeg', alt: 'Image 3' },
    ];
  
    currentIndex = 0;
    interval: any;
  
    ngOnInit() {
      this.startAutoSlide();
    }
  
    // Get the transform value for carousel sliding
    getTransform() {
      return `translateX(-${this.currentIndex * 100}%)`;
    }
  
    // Show the next image
    showNextImage() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }
  
    // Show the previous image
    showPrevImage() {
      this.currentIndex =
        (this.currentIndex - 1 + this.images.length) % this.images.length;
    }
  
    // Select an image from thumbnails
    selectImage(index: number) {
      this.currentIndex = index;
      this.stopAutoSlide();
    }
  
    // Start auto sliding of the carousel
    startAutoSlide() {
      this.interval = setInterval(() => this.showNextImage(), 3000);
    }
  
    // Stop auto sliding when user interacts
    stopAutoSlide() {
      clearInterval(this.interval);
    }
  
    // Stop auto slide on mouse enter and resume on mouse leave
    @HostListener('mouseenter')
    onMouseEnter() {
      this.stopAutoSlide();
    }
  
    @HostListener('mouseleave')
    onMouseLeave() {
      this.startAutoSlide();
    }
  }
  

