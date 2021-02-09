import {Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PortafolioService } from '../../servicios/portafolio.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit{

  proyecto:any[] = [];
  termino:string;

  constructor( private activatedRoute: ActivatedRoute,
               private portafolioService: PortafolioService){ }

  ngOnInit(): void{
    this.activatedRoute.params.subscribe( params =>{
      this.termino = params['termino'];
      this.proyecto = this.portafolioService.buscarTermino( params['termino']);
      console.log('termino');
    })

  }

}
