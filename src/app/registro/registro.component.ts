import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {
  
form: FormGroup;
  constructor(private formB: FormBuilder) {
    this.createFrm();
   }

   private createFrm(){
     this.form = this.formB.group({
      
      nombre:[null, [
         Validators.required
      ]],

      apellido: [null, 
      Validators.required
    ],

        email: [null, [
        Validators.required,
        Validators.email
      ]],
      usuario:[null, [
        Validators.required,
        Validators.minLength(3)
      ]],
      contraeña:[null,[
      Validators.required,
      Validators.minLength(6)
    ]],
    pais: [null],
    
    newsletter: [false, Validators.requiredTrue]
  });
   }



  ngOnInit() {
  }

}
