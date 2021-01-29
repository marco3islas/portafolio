import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//Rutas
import { APP_ROUTING } from './app.routes';
//Servicios
//Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import {BienvenidoComponent} from './components/bienvenida/app.bienvenida.component';
import {AboutComponent} from './components/about/about.component';
import {GaleriaComponent} from './components/galeria/galeria.component';
import {ConctactoComponent} from './components/contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    BienvenidoComponent,
    AboutComponent,
    GaleriaComponent,
    ConctactoComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
