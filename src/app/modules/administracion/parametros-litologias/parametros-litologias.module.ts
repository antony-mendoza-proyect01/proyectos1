import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ParametrosLitologiasRoutingModule} from './parametros-litologias-routing.module';
import {ParametrosLitologiasComponent} from './parametros-litologias.component';
import {ListadoComponent} from './components/listado/listado.component';
import {FormModalComponent} from './components/form-modal/form-modal.component';
import {ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../../../shared/shared.module';
import {ColorSketchModule} from "ngx-color/sketch";



@NgModule({
  declarations: [ParametrosLitologiasComponent, ListadoComponent, FormModalComponent],
    imports: [
        CommonModule,
        ParametrosLitologiasRoutingModule,
        ReactiveFormsModule,
        SharedModule,
        ColorSketchModule
    ]
})
export class ParametrosLitologiasModule { }
