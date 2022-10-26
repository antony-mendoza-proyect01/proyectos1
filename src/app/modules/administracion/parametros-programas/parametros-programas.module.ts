import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ParametrosProgramasRoutingModule} from './parametros-programas-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import { ListadoComponent } from './components/listado/listado.component';
import { FormModalComponent } from './components/form-modal/form-modal.component';
import { ParametrosProgramasComponent } from './parametros-programas.component';
import {SharedModule} from '../../../shared/shared.module';



@NgModule({
  declarations: [ParametrosProgramasComponent, ListadoComponent, FormModalComponent],
  imports: [
    CommonModule,
    ParametrosProgramasRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class ParametrosProgramasModule { }
