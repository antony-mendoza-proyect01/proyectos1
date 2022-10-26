import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CalibracionDensidadRoutingModule} from './calibracion-densidad-routing.module';

import { FormModalComponent } from './components/form-modal/form-modal.component';
import { ListadoComponent } from './components/listado/listado.component';
import {SharedModule} from "../../../shared/shared.module";
import {CalibracionDensidadComponent} from "./calibracion-densidad.component";



@NgModule({
  declarations: [CalibracionDensidadComponent, FormModalComponent, ListadoComponent],
    imports: [
        CommonModule,
        CalibracionDensidadRoutingModule,
        SharedModule
    ]
})
export class CalibracionDensidadModule { }
