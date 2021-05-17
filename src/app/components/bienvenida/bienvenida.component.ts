import { Component } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-bienvenido',
  templateUrl: './bienvenido.component.html',
  styleUrls: ['./bienvenido.component.css']
})

export class BienvenidoComponent{
  constructor( private router:Router){}

    verContacto(){
        this.router.navigate(['/contacto']);
    }

    verPortafolio(){
        this.router.navigate(['/galeria']);
    }

}
