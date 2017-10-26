import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class PortadaPostService {

  constructor(private httpPost: Http) { }
  getAll():Observable<any>{
    return this.httpPost.get('/json/portada-post.json');
  }

}
