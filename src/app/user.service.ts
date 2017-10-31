import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {User} from './user';

@Injectable()
export class UserService {

  constructor(private http: Http) { }
  getUser(name:string):Observable<User>{
    return this.http.get('/json/user.json' + name)
    .map(data=> data.json());
    }
  
  }

