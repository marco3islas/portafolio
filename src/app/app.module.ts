import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
 // Rutas
import { APP_ROUTING } from './app.routes';
 // Servicios
import {PortafolioService} from './servicios/portafolio.service';
 // Componentes
import {ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { ProyectoTarjetaComponent } from './components/proyecto-tarjeta/proyecto-tarjeta.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import {BuscarComponent} from './components/buscar/buscar.component';
import {PagesModule} from './components/pages/pages.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BuscarComponent,
    ProyectoTarjetaComponent,
    NopagefoundComponent,
    LoadingComponent,
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
      PagesModule,
    ReactiveFormsModule
  ],
  providers: [
    PortafolioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
