import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ParametrosLitofaciesRoutingModule} from './parametros-litofacies-routing.module';
import {ParametrosLitofaciesComponent} from './parametros-litofacies.component';

import {ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../../../shared/shared.module';
import { FormModalComponent } from './components/form-modal/form-modal.component';
import { ListadoComponent } from './components/listado/listado.component';



@NgModule({
  declarations: [ParametrosLitofaciesComponent, FormModalComponent, ListadoComponent],
    imports: [
        CommonModule,
        ParametrosLitofaciesRoutingModule,
        ReactiveFormsModule,
        SharedModule
    ]
})
export class ParametrosLitofaciesModule { }
