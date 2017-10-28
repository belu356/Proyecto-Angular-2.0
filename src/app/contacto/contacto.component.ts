import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {

    nombre: string;
  constructor() { }

  ngOnInit() {
  }
    
onSubmit(form){
  
}
}

interface pesona{
  nombre: string;
  apellido: string;
  email: string;
  pais: string;
  terminos:boolean;
}