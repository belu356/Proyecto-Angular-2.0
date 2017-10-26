import { Component, OnInit } from '@angular/core';
import {ComentsService} from '../coments.service';


@Component({
  selector: 'app-coments',
  templateUrl: './coments.component.html',
  styleUrls: ['./coments.component.scss']
})
export class ComentsComponent implements OnInit {

  coment: Coment;
  constructor() { }

  ngOnInit() {
  }

}
