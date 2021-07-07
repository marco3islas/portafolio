import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from './pages/home/home.component';
import {AboutComponent} from './pages/about/about.component';
import {GaleriaComponent} from './pages/galeria/galeria.component';
import {DetallesComponent} from './pages/detalles/detalles.component';
import {ConctactoComponent} from './pages/contacto/contacto.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
      HomeComponent,
      AboutComponent,
      GaleriaComponent,
      DetallesComponent,
      ConctactoComponent
  ],
  imports: [
      CommonModule,
      ReactiveFormsModule 
  ]
})
export class PagesModule { }
