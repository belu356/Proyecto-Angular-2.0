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
import { ComentsComponent } from './coments/coments.component';
import { PostListComponent } from './post-list/post-list.component';
import { FooterComponent } from './footer/footer.component';
import { PaginationComponent } from './pagination/pagination.component';
import { CommentsService } from './coments.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import { UserComponent } from './user/user.component';
 


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    NosotrosComponent,
    PostComponent,
    ContactoComponent,
    PortadaComponent,
    PortadaPostComponent,
    ComentsComponent,
    PostListComponent,
    FooterComponent,
    PaginationComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    NgbModule.forRoot()
  ],
  providers: [
    CommentsService,
    PostService,
    PortadaPostService
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
