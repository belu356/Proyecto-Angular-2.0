import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class PostService {

  constructor(private http:Http) { }

    getAll():Observable<any>{
      return this.http.get('/json/post.json');
    }
}
