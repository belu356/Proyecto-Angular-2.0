import { Component, OnInit } from '@angular/core';
import {PostService} from '../post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  Post:Array<any>;
  

  constructor(private postService: PostService) { }

  ngOnInit() { 
    this.postService.getAll().subscribe(Post=>{
      this.Post = Post.json();
    })
  }

}
