import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../../../shared/shared.module';
import {ParametrosEspaciamientoRoutingModule} from "./parametros-espaciamiento-routing.module";
import {ParametrosEspaciamientoComponent} from "./parametros-espaciamiento.component";
import { FormModalComponent } from './components/form-modal/form-modal.component';
import { ListadoComponent } from './components/listado/listado.component';



@NgModule({
  declarations: [ParametrosEspaciamientoComponent, FormModalComponent, ListadoComponent],
  imports: [
    CommonModule,
    ParametrosEspaciamientoRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class ParametrosEspaciamientosModule { }
