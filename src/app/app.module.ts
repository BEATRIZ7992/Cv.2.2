import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SobremiComponent } from './components/sobremi/sobremi.component';
import { HardskillComponent } from './components/hardskill/hardskill.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CvComponent } from './components/cv/cv.component';



@NgModule({
  declarations: [
    AppComponent,
    SobremiComponent,
    HardskillComponent,
    ProyectosComponent,
    ContactoComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    CvComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,



  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
