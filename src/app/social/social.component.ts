import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrl: './social.component.css'
})
export class SocialComponent {
  @ViewChild('socialMedia') socialMediaElement!: ElementRef;

  ngAfterViewInit() {
    if (this.socialMediaElement) {
      console.log(this.socialMediaElement.nativeElement);
    }
  }
}
