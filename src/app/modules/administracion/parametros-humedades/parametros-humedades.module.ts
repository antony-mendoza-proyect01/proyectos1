import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ParametrosHumedadesRoutingModule} from './parametros-humedades-routing.module';
import {ParametrosHumedadesComponent} from './parametros-humedades.component';
import {ListadoComponent} from './components/listado/listado.component';
import {FormModalComponent} from './components/form-modal/form-modal.component';
import {ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../../../shared/shared.module';



@NgModule({
  declarations: [ParametrosHumedadesComponent, ListadoComponent, FormModalComponent],
    imports: [
        CommonModule,
        ParametrosHumedadesRoutingModule,
        ReactiveFormsModule,
        SharedModule
    ]
})
export class ParametrosHumedadesModule { }
