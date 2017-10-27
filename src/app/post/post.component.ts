import { Component, OnInit } from '@angular/core';
import {PostService} from '../post.service';
import { ActivatedRoute } from '@angular/router';
import {Post} from '../post';
import {Observable} from 'rxjs/Observable';
import { CommentsService } from '../coments.service';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {


  
  //comments: Array<any>= [];
   //private comment: CommentsService) 
    
  
  post:Post;
 
  
          
    
  
    constructor(private postServicio: PostService,
      private activatedRoute: ActivatedRoute){}
    
  
    ngOnInit() {
      this.activatedRoute.params.subscribe(params =>{
        this.getPost(params['id']);
      });
    }
    private getPost(id: number) {
      this.postServicio.getPost(id).subscribe(post =>{
        this.post = post;
      });

     // this.comment.getCommentsByPostId(id).subscribe(
       // r=> this.comment = r
      //);
    }
  }
  