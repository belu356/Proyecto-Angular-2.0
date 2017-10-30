import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import {Post} from '../post'
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  posts=[];
  p:number = 1;
  
  
  constructor(private postServicio: PostService) {
    for(let i=1;i<=100;i++){
  
   }
  }

  ngOnInit() {
    this.postServicio.getPosts().subscribe(posts =>{
      this.posts = posts;
    })
  
    }
  }


  
