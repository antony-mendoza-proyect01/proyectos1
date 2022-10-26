import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ParametrosCalificadoresRoutingModule} from './parametros-calificadores-routing.module';
import {ParametrosCalificadoresComponent} from './parametros-calificadores.component';
import {ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../../../shared/shared.module';
import { ListadoComponent } from './components/listado/listado.component';
import {FormModalComponent} from "./components/form-modal/form-modal.component";





@NgModule({
  declarations: [ParametrosCalificadoresComponent, ListadoComponent, FormModalComponent],
    imports: [
        CommonModule,
        ParametrosCalificadoresRoutingModule,
        ReactiveFormsModule,
        SharedModule
    ]
})
export class ParametrosCalificadoresModule { }
