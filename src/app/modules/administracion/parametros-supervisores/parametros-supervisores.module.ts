import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ParametrosSupervisoresRoutingModule} from './parametros-supervisores-routing.module';
import {ParametrosSupervisoresComponent} from './parametros-supervisores.component';
import {ListadoComponent} from './components/listado/listado.component';
import {FormModalComponent} from './components/form-modal/form-modal.component';
import {ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../../../shared/shared.module';



@NgModule({
  declarations: [ParametrosSupervisoresComponent, ListadoComponent, FormModalComponent],
    imports: [
        CommonModule,
        ParametrosSupervisoresRoutingModule,
        ReactiveFormsModule,
        SharedModule
    ]
})
export class ParametrosSupervisoresModule { }
