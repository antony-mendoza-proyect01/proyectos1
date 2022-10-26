import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ParametrosTipoPerforacionesRoutingModule} from './parametros-tipo-perforaciones-routing.module';
import {ParametrosTipoPerforacionesComponent} from './parametros-tipo-perforaciones.component';
import {ListadoComponent} from './components/listado/listado.component';
import {FormModalComponent} from './components/form-modal/form-modal.component';
import {ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../../../shared/shared.module';



@NgModule({
  declarations: [ParametrosTipoPerforacionesComponent, ListadoComponent, FormModalComponent],
    imports: [
        CommonModule,
        ParametrosTipoPerforacionesRoutingModule,
        ReactiveFormsModule,
        SharedModule
    ]
})
export class ParametrosTipoPerforacionesModule { }
