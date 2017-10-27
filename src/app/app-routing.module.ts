import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent} from './home/home.component';
import {NosotrosComponent} from './nosotros/nosotros.component';
import {ContactoComponent} from './contacto/contacto.component';
import {PostComponent} from './post/post.component';
import {PortadaPostComponent} from './portada-post/portada-post.component';
import {PostListComponent} from './post-list/post-list.component';


const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'nosotros', component:NosotrosComponent},
  {path:'contacto', component:ContactoComponent},
  {path: 'post', component: PostListComponent},
  {path:'post/:id', component:PostComponent},
  {path: 'personajedelmes', component:PortadaPostComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
