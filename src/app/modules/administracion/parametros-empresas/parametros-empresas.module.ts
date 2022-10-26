import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ParametrosEmpresasRoutingModule} from './parametros-empresas-routing.module';
import {ParametrosEmpresasComponent} from './parametros-empresas.component';
import {ListadoComponent} from './components/listado/listado.component';
import {FormModalComponent} from './components/form-modal/form-modal.component';
import {ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../../../shared/shared.module';



@NgModule({
  declarations: [ParametrosEmpresasComponent, ListadoComponent, FormModalComponent],
    imports: [
        CommonModule,
        ParametrosEmpresasRoutingModule,
        ReactiveFormsModule,
        SharedModule
    ]
})
export class ParametrosEmpresasModule { }
