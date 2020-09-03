import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { HomeComponent } from './layout/home/home.component';
import { AboutUsComponent } from './layout/about-us/about-us.component';
import { ServicesComponent } from './layout/services/services.component';
import { ContactUsComponent } from './layout/contact-us/contact-us.component';


@NgModule({
  declarations: [
    HomeComponent,
    AboutUsComponent,
    ServicesComponent,
    ContactUsComponent,
    AppComponent,
    FooterComponent,
    SidebarComponent
  ],
  imports: [
    BrowserAnimationsModule,
    NoopAnimationsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
