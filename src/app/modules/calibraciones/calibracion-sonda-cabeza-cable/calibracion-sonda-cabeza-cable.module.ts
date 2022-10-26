import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CalibracionSondaCabezaCableRoutingModule} from './calibracion-sonda-cabeza-cable-routing.module';
import {CalibracionSondaCabezaCableComponent} from './calibracion-sonda-cabeza-cable.component';
import { FormModalComponent } from './components/form-modal/form-modal.component';
import { ListadoComponent } from './components/listado/listado.component';
import {SharedModule} from "../../../shared/shared.module";



@NgModule({
  declarations: [CalibracionSondaCabezaCableComponent, FormModalComponent, ListadoComponent],
    imports: [
        CommonModule,
        CalibracionSondaCabezaCableRoutingModule,
        SharedModule
    ]
})
export class CalibracionSondaCabezaCableModule { }
