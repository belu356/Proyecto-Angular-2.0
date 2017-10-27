import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import {Post} from '../post'
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  post: Array<any>;
  
  constructor(private postServicio: PostService) { }

  ngOnInit() {
    this.postServicio.getPost().subscribe(post =>{
      this.post = post;
    })
  }

}
