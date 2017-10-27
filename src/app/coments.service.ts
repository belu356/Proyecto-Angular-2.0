import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ComentsService {

  constructor(private http: Http) { }
  etAll():Observable<any>{
    return this.http.get('https://jsonplaceholder.typicode.com/comments');

}
}
