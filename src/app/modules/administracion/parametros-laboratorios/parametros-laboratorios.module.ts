import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ParametrosLaboratoriosRoutingModule} from './parametros-laboratorios-routing.module';
import {ParametrosLaboratoriosComponent} from './parametros-laboratorios.component';
import {ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../../../shared/shared.module';
import {ListadoComponent} from "./components/listado/listado.component";
import { FormModalComponent } from './components/form-modal/form-modal.component';



@NgModule({
  declarations: [ParametrosLaboratoriosComponent, ListadoComponent, FormModalComponent],
    imports: [
        CommonModule,
        ParametrosLaboratoriosRoutingModule,
        ReactiveFormsModule,
        SharedModule
    ]
})
export class ParametrosLaboratoriosModule { }
