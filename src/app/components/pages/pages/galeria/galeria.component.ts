import { Component, OnInit } from '@angular/core';
import {PortafolioService} from 'src/app/servicios/portafolio.service';
import { Router } from '@angular/router';
import {ProyectoModel} from 'src/app/models/proyecto.models';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})

export class GaleriaComponent implements OnInit{

    portafolio: ProyectoModel[] = [];
    loading?: boolean;


  constructor( private portafolioService:PortafolioService,
               private router:Router){

  }
    ngOnInit(): void{
        this.loading = true;
        this.portafolio = this.portafolioService.getPortafolio();
        this.loading = false;
  }
  verProyecto(idx:number){
   this.router.navigate(['/detalles',idx]); 
  }
}
