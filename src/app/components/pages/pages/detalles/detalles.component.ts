import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PortafolioService } from '../../../../servicios/portafolio.service';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent{

  proyecto:any = [] ;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private portafolioService: PortafolioService
){
    this.activatedRoute.params.subscribe( params => {

      this.proyecto = this.portafolioService.getPortafolios( params['id']);
      
    });
  }
    verPortafolio(){
        this.router.navigate(['/galeria']);
    }
}
