import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ParametrosNombresIntervalosRoutingModule} from './parametros-nombres-intervalos-routing.module';
import {ParametrosNombresIntervalosComponent} from './parametros-nombres-intervalos.component';
import {ListadoComponent} from './components/listado/listado.component';
import {FormModalComponent} from './components/form-modal/form-modal.component';
import {ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../../../shared/shared.module';



@NgModule({
  declarations: [ParametrosNombresIntervalosComponent, ListadoComponent, FormModalComponent],
    imports: [
        CommonModule,
        ParametrosNombresIntervalosRoutingModule,
        ReactiveFormsModule,
        SharedModule
    ]
})
export class ParametrosNombresIntervalosModule { }
