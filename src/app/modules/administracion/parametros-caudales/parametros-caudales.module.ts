import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ParametrosCaudalesRoutingModule} from './parametros-caudales-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import { ListadoComponent } from './components/listado/listado.component';
import { FormModalComponent } from './components/form-modal/form-modal.component';
import { ParametrosCaudalesComponent } from './parametros-caudales.component';
import {SharedModule} from '../../../shared/shared.module';



@NgModule({
  declarations: [ParametrosCaudalesComponent, ListadoComponent, FormModalComponent],
  imports: [
    CommonModule,
    ParametrosCaudalesRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class ParametrosCaudalesModule { }
