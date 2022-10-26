import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ParametrosDurezasRoutingModule} from './parametros-durezas-routing.module';
import {ParametrosDurezasComponent} from './parametros-durezas.component';
import {ListadoComponent} from './components/listado/listado.component';
import {FormModalComponent} from './components/form-modal/form-modal.component';
import {ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../../../shared/shared.module';



@NgModule({
  declarations: [ParametrosDurezasComponent, ListadoComponent, FormModalComponent],
    imports: [
        CommonModule,
        ParametrosDurezasRoutingModule,
        ReactiveFormsModule,
        SharedModule
    ]
})
export class ParametrosDurezasModule { }
