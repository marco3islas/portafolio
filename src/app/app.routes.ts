import {RouterModule, Routes} from '@angular/router';
import { BienvenidoComponent } from './components/bienvenida/app.bienvenida.component';
import { AboutComponent } from './components/about/about.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { ConctactoComponent } from './components/contacto/contacto.component';

const APP_ROUTES: Routes = [
  { path: 'bienvenida', component: BienvenidoComponent },
  { path: 'about', component: AboutComponent },
  { path: 'galeria', component: GaleriaComponent },
  { path: 'contacto', component: ConctactoComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'bienvenida' },
];



export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES,{ useHash:true });
