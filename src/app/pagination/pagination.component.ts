import { Component, OnInit } from '@angular/core';
import {PostListComponent} from '../post-list/post-list.component'
import {PostService} from '../post.service';
import { Post } from '../post';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

posts:Post[];
  
constructor(private postServicio: PostService) { }

  ngOnInit() {
    this.postServicio.getPosts().subscribe(posts=>{
    this.posts = posts;
  });

  }
}
