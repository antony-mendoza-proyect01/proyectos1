import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ParametrosTonosRoutingModule} from './parametros-tonos-routing.module';
import {ParametrosTonosComponent} from './parametros-tonos.component';
import {ListadoComponent} from './components/listado/listado.component';
import {FormModalComponent} from './components/form-modal/form-modal.component';
import {ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../../../shared/shared.module';



@NgModule({
  declarations: [ParametrosTonosComponent, ListadoComponent, FormModalComponent],
    imports: [
        CommonModule,
        ParametrosTonosRoutingModule,
        ReactiveFormsModule,
        SharedModule
    ]
})
export class ParametrosTonosModule { }
