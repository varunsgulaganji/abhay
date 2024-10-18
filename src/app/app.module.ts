import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DecorationComponent } from './decoration/decoration.component';
import { ContactComponent } from './contact/contact.component';
import { CauroselComponent } from './caurosel/caurosel.component';
import { AboutcompanyComponent } from './aboutcompany/aboutcompany.component';
import { AboutchooseComponent } from './aboutchoose/aboutchoose.component';
import { AboutfooterComponent } from './aboutfooter/aboutfooter.component';
import { HomeMEComponent } from './home-me/home-me.component';

import { Home1Component } from './home1/home1.component';
import { FooterComponent } from './footer/footer.component';
import { CauroselhomeComponent } from './cauroselhome/cauroselhome.component';
import { ResponisveComponent } from './responisve/responisve.component';
import { SocialComponent } from './social/social.component';
import { DecorationCardComponent } from './decoration-card/decoration-card.component';
import { StarComponent } from './star/star.component';
import { StageComponent } from './stage/stage.component';
import { MandapComponent } from './mandap/mandap.component';
import { CoupleentranceComponent } from './coupleentrance/coupleentrance.component';
import { HouselightingComponent } from './houselighting/houselighting.component';
import { HousedecoComponent } from './housedeco/housedeco.component';
import { SelfieComponent } from './selfie/selfie.component';
import { LeavesComponent } from './leaves/leaves.component';
import { CocleavesComponent } from './cocleaves/cocleaves.component';
import { ContactfooterComponent } from './contactfooter/contactfooter.component';
import { ContactmeComponent } from './contactme/contactme.component';
import { HttpClient } from '@angular/common/http';
import { AllComponent } from './all/all.component';
import { VarunComponent } from './varun/varun.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    DecorationComponent,
    ContactComponent,
    CauroselComponent,
    AboutcompanyComponent,
    AboutchooseComponent,
    AboutfooterComponent,
    HomeMEComponent,
    
    Home1Component,
    FooterComponent,
    CauroselhomeComponent,
    ResponisveComponent,
    SocialComponent,
    DecorationCardComponent,
    StarComponent,
    StageComponent,
    MandapComponent,
    CoupleentranceComponent,
    HouselightingComponent,
    HousedecoComponent,
    SelfieComponent,
    LeavesComponent,
    CocleavesComponent,
    ContactfooterComponent,
    ContactmeComponent,
    AllComponent,
    VarunComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
