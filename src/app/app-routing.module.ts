import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './component/about/about.component';
import { ContactComponent } from './component/contact/contact.component';
import { BeautyComponent } from './component/beauty/beauty.component';
import { CommercialComponent } from './component/commercial/commercial.component';
import { PersonalComponent } from './component/personal/personal.component';
import { CoverComponent } from './component/cover/cover.component';
import { FashionComponent } from './component/fashion/fashion.component';
import { HomeComponent } from './component/home/home.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'fashion', component: FashionComponent },
  { path: 'cover', component: CoverComponent },
  { path: 'personal', component: PersonalComponent },
  { path: 'commercial', component: CommercialComponent },
  { path: 'beauty', component: BeautyComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
  