import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent} from './home/home.component';
import {NosotrosComponent} from './nosotros/nosotros.component';
import {RegistroComponent} from './registro/registro.component';
import {PostComponent} from './post/post.component';
import {PortadaPostComponent} from './portada-post/portada-post.component';
import {PostListComponent} from './post-list/post-list.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'post/:id', component:PostComponent},
  {path: 'personajedelmes', component:PortadaPostComponent},
  {path:'nosotros', component:NosotrosComponent},
  {path:'registro', component:RegistroComponent},
  {path: 'post', component: PostListComponent},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
