import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ParametrosGranosRoutingModule} from './parametros-granos-routing.module';
import {ParametrosGranosComponent} from './parametros-granos.component';
import {ListadoComponent} from './components/listado/listado.component';
import {FormModalComponent} from './components/form-modal/form-modal.component';
import {ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../../../shared/shared.module';



@NgModule({
  declarations: [ParametrosGranosComponent, ListadoComponent, FormModalComponent],
    imports: [
        CommonModule,
        ParametrosGranosRoutingModule,
        ReactiveFormsModule,
        SharedModule
    ]
})
export class ParametrosGranosModule { }
