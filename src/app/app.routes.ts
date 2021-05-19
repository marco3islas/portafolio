import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { ConctactoComponent } from './components/contacto/contacto.component';
import { DetallesComponent } from './components/detalles/detalles.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import {NopagefoundComponent} from './nopagefound/nopagefound.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'galeria', component: GaleriaComponent },
  { path: 'contacto', component: ConctactoComponent },
  { path: 'detalles/:id', component: DetallesComponent },
  { path: 'buscar/:termino', component: BuscarComponent },
  { path: '',  redirectTo: 'home', pathMatch: 'full' },
  { path: '**',  component: NopagefoundComponent },
];



export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash:true });
