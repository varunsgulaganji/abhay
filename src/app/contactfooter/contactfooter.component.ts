import { Component } from '@angular/core';

@Component({
  selector: 'app-contactfooter',
  templateUrl: './contactfooter.component.html',
  styleUrl: './contactfooter.component.css'
})
export class ContactfooterComponent {

  platforms = [
    // { icon: 'fa fa-linkedin-square', url: 'https://www.linkedin.com/', name: 'Linkedin', description: 'Apna College' },
    { icon: 'fa fa-youtube-play', url: 'https://youtube.com/@abhaygarwad3240?si=YHG62IhTl7bsdwSb', name: 'Youtube', description: 'Abhay Grawad' },
    { icon: 'fa fa-instagram', url: 'https://www.instagram.com/abhay_events_44?igsh=Zjl0YTZwdzk1a2Rn/', name: 'Instagram', description: 'Abhay Events' },
    { icon: 'fa fa-instagram', url: 'https://www.instagram.com/abh_ay_gar_wad?igsh=MXhhbHJ1ZHdlbm85cw==/',name: 'Instagram', description: 'Abhay Grawad' }
  ];
}
