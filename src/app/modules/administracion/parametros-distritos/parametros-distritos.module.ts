import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ParametrosDistritosRoutingModule} from './parametros-distritos-routing.module';
import {ParametrosDistritosComponent} from './parametros-distritos.component';
import {ListadoComponent} from './components/listado/listado.component';
import {FormModalComponent} from './components/form-modal/form-modal.component';
import {ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../../../shared/shared.module';



@NgModule({
  declarations: [ParametrosDistritosComponent, ListadoComponent, FormModalComponent],
    imports: [
        CommonModule,
        ParametrosDistritosRoutingModule,
        ReactiveFormsModule,
        SharedModule
    ]
})
export class ParametrosDistritosModule { }
