import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ParametrosDescripcionesRoutingModule} from './parametros-descripciones-routing.module';
import {ParametrosDescripcionesComponent} from './parametros-descripciones.component';
import {ListadoComponent} from './components/listado/listado.component';
import {FormModalComponent} from './components/form-modal/form-modal.component';
import {ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../../../shared/shared.module';



@NgModule({
  declarations: [ParametrosDescripcionesComponent, ListadoComponent, FormModalComponent],
    imports: [
        CommonModule,
        ParametrosDescripcionesRoutingModule,
        ReactiveFormsModule,
        SharedModule
    ]
})
export class ParametrosDescripcionesModule { }
