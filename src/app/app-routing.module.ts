import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './layout/home/home.component';
import { AboutUsComponent } from './layout/about-us/about-us.component';
import { ServicesComponent } from './layout/services/services.component';
import { ContactUsComponent } from './layout/contact-us/contact-us.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  {
    path: 'home', component: HomeComponent,
    data: {
      animation: 'Home'
    }
  },
  {
    path: 'about', component: AboutUsComponent,
    data: {
      animation: 'About'
    }
  },
  {
    path: 'services', component: ServicesComponent,
    data: {
      animation: 'Services'
    }
  },
  {
    path: 'contact', component: ContactUsComponent,
    data: {
      animation: 'Contact'
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
