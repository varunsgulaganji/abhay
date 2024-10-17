import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DecorationComponent } from './decoration/decoration.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'about', component: AboutComponent},
  {path:'decoration', component: DecorationComponent},
  {path:'contact', component: ContactComponent},
  {path:'**',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
