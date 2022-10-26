import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ParametrosCodigosProyectosRoutingModule} from './parametros-codigos-proyectos-routing.module';

import {ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../../../shared/shared.module';
import {ParametrosCodigosProyectosComponent} from "./parametros-codigos-proyectos.component";
import {ListadoComponent} from "./components/listado/listado.component";
import { FormModalComponent } from './components/form-modal/form-modal.component';



@NgModule({
  declarations: [ParametrosCodigosProyectosComponent, ListadoComponent, FormModalComponent],
    imports: [
        CommonModule,
        ParametrosCodigosProyectosRoutingModule,
        ReactiveFormsModule,
        SharedModule
    ]
})
export class ParametrosCodigosProyectosModule { }
