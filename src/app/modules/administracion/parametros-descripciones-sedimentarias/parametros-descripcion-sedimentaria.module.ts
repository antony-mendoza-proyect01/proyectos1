import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ParametrosDescripcionSedimentariaRoutingModule} from './parametros-descripcion-sedimentaria-routing.module';
import {ParametrosDescripcionSedimentariaComponent} from './parametros-descripcion-sedimentaria.component';
import {ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../../../shared/shared.module';
import { FormModalComponent } from './components/form-modal/form-modal.component';
import { ListadoComponent } from './components/listado/listado.component';



@NgModule({
  declarations: [ParametrosDescripcionSedimentariaComponent, FormModalComponent, ListadoComponent],
    imports: [
        CommonModule,
        ParametrosDescripcionSedimentariaRoutingModule,
        ReactiveFormsModule,
        SharedModule
    ]
})
export class ParametrosDescripcionSedimentariaModule { }
