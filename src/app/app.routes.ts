import {RouterModule, Routes} from '@angular/router';
import { BienvenidoComponent } from './components/bienvenida/bienvenida.component';
import { AboutComponent } from './components/about/about.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { ConctactoComponent } from './components/contacto/contacto.component';
import { DetallesComponent } from './components/detalles/detalles.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import {NopagefoundComponent} from './nopagefound/nopagefound.component';

const APP_ROUTES: Routes = [
  { path: 'bienvenida', component: BienvenidoComponent },
  { path: 'about', component: AboutComponent },
  { path: 'galeria', component: GaleriaComponent },
  { path: 'contacto', component: ConctactoComponent },
  { path: 'detalles/:id', component: DetallesComponent },
  { path: 'buscar/:termino', component: BuscarComponent },
  { path: '',  redirectTo: 'bienvenida', pathMatch: 'full' },
  { path: '**',  component: NopagefoundComponent },

];



export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash:true });
