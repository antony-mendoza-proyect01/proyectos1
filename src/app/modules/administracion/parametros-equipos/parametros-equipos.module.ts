import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ParametrosEquiposRoutingModule} from './parametros-equipos-routing.module';
import {ParametrosEquiposComponent} from './parametros-equipos.component';
import {ListadoComponent} from './components/listado/listado.component';
import {FormModalComponent} from './components/form-modal/form-modal.component';
import {ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../../../shared/shared.module';



@NgModule({
  declarations: [ParametrosEquiposComponent, ListadoComponent, FormModalComponent],
    imports: [
        CommonModule,
        ParametrosEquiposRoutingModule,
        ReactiveFormsModule,
        SharedModule
    ]
})
export class ParametrosEquiposModule { }
