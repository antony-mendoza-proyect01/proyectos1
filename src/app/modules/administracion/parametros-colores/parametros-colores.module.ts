import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ParametrosColoresRoutingModule} from './parametros-colores-routing.module';
import {ParametrosColoresComponent} from './parametros-colores.component';
import {ListadoComponent} from './components/listado/listado.component';
import {FormModalComponent} from './components/form-modal/form-modal.component';
import {ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../../../shared/shared.module';



@NgModule({
  declarations: [ParametrosColoresComponent, ListadoComponent, FormModalComponent],
    imports: [
        CommonModule,
        ParametrosColoresRoutingModule,
        ReactiveFormsModule,
        SharedModule
    ]
})
export class ParametrosColoresModule { }
