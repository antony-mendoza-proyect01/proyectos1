import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ParametrosVisibilidadesRoutingModule} from './parametros-visibilidades-routing.module';
import { ParametrosVisibilidadesComponent} from './parametros-visibilidades.component';
import {ListadoComponent} from './components/listado/listado.component';
import {FormModalComponent} from './components/form-modal/form-modal.component';
import {ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../../../shared/shared.module';



@NgModule({
  declarations: [ParametrosVisibilidadesComponent, ListadoComponent, FormModalComponent],
    imports: [
        CommonModule,
        ParametrosVisibilidadesRoutingModule,
        ReactiveFormsModule,
        SharedModule
    ]
})
export class ParametrosVisibilidadesModule { }
