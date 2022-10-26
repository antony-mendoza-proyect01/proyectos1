import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ParametrosLitofacieColoresRoutingModule} from './parametros-litofacie-colores-routing.module';
import {ParametrosLitofacieColoresComponent} from './parametros-litofacie-colores.component';
import {ListadoComponent} from './components/listado/listado.component';
import {FormModalComponent} from './components/form-modal/form-modal.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../../../shared/shared.module';
import {ColorSketchModule} from 'ngx-color/sketch';


@NgModule({
  declarations: [ParametrosLitofacieColoresComponent, ListadoComponent, FormModalComponent],
  imports: [
    CommonModule,
    ParametrosLitofacieColoresRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    FormsModule,
    ColorSketchModule
  ]
})
export class ParametrosLitofacieColoresModule { }
