import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CalibracionDatosPozoRegistradoRoutingModule} from './calibracion-datos-pozo-registrado-routing.module';
import {CalibracionDatosPozoRegistradoComponent} from './calibracion-datos-pozo-registrado.component';
import { FormModalComponent } from './components/form-modal/form-modal.component';
import { ListadoComponent } from './components/listado/listado.component';
import {SharedModule} from "../../../shared/shared.module";



@NgModule({
  declarations: [CalibracionDatosPozoRegistradoComponent, FormModalComponent, ListadoComponent],
    imports: [
        CommonModule,
        CalibracionDatosPozoRegistradoRoutingModule,
        SharedModule
    ]
})
export class CalibracionDatosPozoRegistradoModule { }
