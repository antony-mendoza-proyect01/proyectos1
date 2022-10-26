import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ParametrosSondasRoutingModule} from './parametros-sondas-routing.module';
import {ParametrosSondasComponent} from './parametros-sondas.component';
import {ListadoComponent} from './components/listado/listado.component';
import {FormModalComponent} from './components/form-modal/form-modal.component';
import {ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../../../shared/shared.module';



@NgModule({
  declarations: [ParametrosSondasComponent, ListadoComponent, FormModalComponent],
    imports: [
        CommonModule,
        ParametrosSondasRoutingModule,
        ReactiveFormsModule,
        SharedModule
    ]
})
export class ParametrosSondasModule { }
