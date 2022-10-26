import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ParametrosMeteorizacionesRoutingModule} from './parametros-meteorizaciones-routing.module';
import {ParametrosMeteorizacionesComponent} from './parametros-meteorizaciones.component';
import {ListadoComponent} from './components/listado/listado.component';
import {FormModalComponent} from './components/form-modal/form-modal.component';
import {ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../../../shared/shared.module';



@NgModule({
  declarations: [ParametrosMeteorizacionesComponent, ListadoComponent, FormModalComponent],
    imports: [
        CommonModule,
        ParametrosMeteorizacionesRoutingModule,
        ReactiveFormsModule,
        SharedModule
    ]
})
export class ParametrosMeteorizacionesModule { }
