import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ParametrosTurnosRoutingModule} from './parametros-turnos-routing.module';
import {ParametrosTurnosComponent} from './parametros-turnos.component';
import {ListadoComponent} from './components/listado/listado.component';
import {FormModalComponent} from './components/form-modal/form-modal.component';
import {ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../../../shared/shared.module';



@NgModule({
  declarations: [ParametrosTurnosComponent, ListadoComponent, FormModalComponent],
    imports: [
        CommonModule,
        ParametrosTurnosRoutingModule,
        ReactiveFormsModule,
        SharedModule
    ]
})
export class ParametrosTurnosModule { }
