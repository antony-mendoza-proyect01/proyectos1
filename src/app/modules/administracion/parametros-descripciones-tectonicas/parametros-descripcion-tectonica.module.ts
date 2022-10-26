import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../../../shared/shared.module';
import { ParametrosDescripcionTectonicaComponent } from './parametros-descripcion-tectonica.component';
import { ParametrosDescripcionTectonicaRoutingModule } from './parametros-descripcion-tectonica-routing.module';
import { ListadoComponent } from './components/listado/listado.component';
import { FormModalComponent } from './components/form-modal/form-modal.component';




@NgModule({
  declarations: [ParametrosDescripcionTectonicaComponent, ListadoComponent, FormModalComponent],
  imports: [
    CommonModule,
    ParametrosDescripcionTectonicaRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class ParametrosDescripcionTectonicasModule { }
