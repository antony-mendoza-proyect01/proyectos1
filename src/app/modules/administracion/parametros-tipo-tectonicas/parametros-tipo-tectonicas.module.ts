import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ParametrosTipoTectonicasRoutingModule} from './parametros-tipo-tectonicas-routing.module';
import {ParametrosTipoTectonicasComponent} from './parametros-tipo-tectonicas.component';
import {ListadoComponent} from './components/listado/listado.component';
import {FormModalComponent} from './components/form-modal/form-modal.component';
import {ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../../../shared/shared.module';



@NgModule({
  declarations: [ParametrosTipoTectonicasComponent, ListadoComponent, FormModalComponent],
    imports: [
        CommonModule,
        ParametrosTipoTectonicasRoutingModule,
        ReactiveFormsModule,
        SharedModule
    ]
})
export class ParametrosTipoTectonicasModule { }
