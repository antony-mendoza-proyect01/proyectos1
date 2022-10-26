import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ParametrosParasecuenciasRoutingModule} from './parametros-parasecuencias-routing.module';
import {ParametrosParasecuenciasComponent} from './parametros-parasecuencias.component';
import {ListadoComponent} from './components/listado/listado.component';
import {FormModalComponent} from './components/form-modal/form-modal.component';
import {ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../../../shared/shared.module';



@NgModule({
  declarations: [ParametrosParasecuenciasComponent, ListadoComponent, FormModalComponent],
    imports: [
        CommonModule,
        ParametrosParasecuenciasRoutingModule,
        ReactiveFormsModule,
        SharedModule
    ]
})
export class ParametrosParasecuenciasModule { }
