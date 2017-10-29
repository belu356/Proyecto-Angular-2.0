import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Comments} from './comments';

@Injectable()
export class CommentsService {

    endpoint= ("https://jsonplaceholder.typicode.com/comments");

    constructor(private http: Http) { }
    
    getAll(){
        return this.http.get(this.endpoint)
        .map(response=> response.json());
    }

    getCommentsByPostId(id:number) {
        return this.http.get('https://jsonplaceholder.typicode.com/comments' + '?postId=' + id)
            .map(response => response.json());
    }
}
