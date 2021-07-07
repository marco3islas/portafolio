import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';



@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})

export class ConctactoComponent implements OnInit{

    forma =  new FormGroup({});

  constructor( private fb: FormBuilder) {
      this.crearFormulario();
  }
  ngOnInit(): void{}

    get nameNoValido(){
        return this.forma.get('name').invalid && this.forma.get('name').touched;
    }

    get emailNoValido(){
        return this.forma.get('email').invalid && this.forma.get('email').touched;
    }

    get comentariosNoValido(){
        return this.forma.get('comentarios').invalid && this.forma.get('comentarios').touched;
    }


    crearFormulario(){
        this.forma = this.fb.group({
            name: ['', [Validators.required, Validators.minLength(5)]],
            email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
            comentarios: ['', [Validators.required, Validators.minLength(8)]],

        });
    }

    guardar(){
        if( this.forma.invalid ){
            return Object.values( this.forma.controls ).forEach( control => { control.markAsTouched();
            });
        }
        // Posteo de la informacion

        this.forma.reset();
    }
}

