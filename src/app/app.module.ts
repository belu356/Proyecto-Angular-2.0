import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { PostComponent } from './post/post.component';
import { ContactoComponent } from './contacto/contacto.component';
import { PortadaComponent } from './portada/portada.component';
import {PostService} from './post.service';
import { HttpModule } from '@angular/http';
import { PortadaPostComponent } from './portada-post/portada-post.component';
import { PortadaPostService } from './portada-post.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    NosotrosComponent,
    PostComponent,
    ContactoComponent,
    PortadaComponent,
    PortadaPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [
    PostService,
    PortadaPostService
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
