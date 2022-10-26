import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CalibracionRoutingModule} from './calibracion-routing.module';
import {CalibracionComponent} from './calibracion.component';



@NgModule({
  declarations: [CalibracionComponent],
  imports: [
    CommonModule,
    CalibracionRoutingModule
  ]
})
export class CalibracionModule { }
