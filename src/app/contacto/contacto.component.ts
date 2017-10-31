import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl,Validators} from '@angular/forms';


@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {

  form:FormGroup;
  
  constructor( private fb: FormBuilder) {}

    private createForm(){
      this.form=this.fb.group({
        nombre: [null,[Validators.required,
        Validators.minLength(3)
      ]],
        apellido:[null,Validators.required],
        email: [null,[Validators.required,
        Validators.minLength(6)]],

        usuario:[null, Validators.required],
        pais: [null],
        newsletter:[false,Validators.required]


      });
    }

  ngOnInit() {}
    
onSubmit(form){
  
}
}

interface form{
  nombre: string;
  apellido: string;
  email: string;
  pais: string;
  terminos:boolean;
}