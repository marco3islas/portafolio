import {RouterModule, Routes} from '@angular/router';
import { BuscarComponent } from './components/buscar/buscar.component';
import {AboutComponent} from './components/pages/pages/about/about.component';
import {ConctactoComponent} from './components/pages/pages/contacto/contacto.component';
import {DetallesComponent} from './components/pages/pages/detalles/detalles.component';
import {GaleriaComponent} from './components/pages/pages/galeria/galeria.component';
import {HomeComponent} from './components/pages/pages/home/home.component';
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



export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES,
    { 
    useHash:true,
        scrollPositionRestoration: 'enabled'
});
