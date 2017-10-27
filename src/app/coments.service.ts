import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Comments} from './comments';

@Injectable()
export class CommentsService {

    constructor(private http: Http) { }
    
    getCommentsByPostId(id:number) {
        return this.http.get('https://jsonplaceholder.typicode.com/comments' + 'postId=' + id)
            .map(response => response.json());
    }
}
