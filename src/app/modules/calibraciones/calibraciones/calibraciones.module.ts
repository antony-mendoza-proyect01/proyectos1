import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CalibracionesComponent} from './calibraciones.component';
import {CalibracionesRoutingModule} from './calibraciones-routing.module';



@NgModule({
  declarations: [CalibracionesComponent],
  imports: [
    CommonModule,
    CalibracionesRoutingModule
  ]
})
export class CalibracionesModule { }
