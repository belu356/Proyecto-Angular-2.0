import { Component, OnInit } from '@angular/core';
import {PortadaPostService} from '../portada-post.service'

@Component({
  selector: 'app-portada-post',
  templateUrl: './portada-post.component.html',
  styleUrls: ['./portada-post.component.scss']
})
export class PortadaPostComponent implements OnInit {


  portadaPost: string;

  constructor(private portada: PortadaPostService) { }

  ngOnInit() {

    this.portada.getAll().subscribe(portadaPost=>{
      this.portadaPost = portadaPost.json();
    })
  }

}
