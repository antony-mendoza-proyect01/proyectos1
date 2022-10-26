import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ParametrosPatronRoutingModule} from './parametros-patron-routing.module';
import {ParametrosPatronComponent} from './parametros-patron.component';
import {ListadoComponent} from './components/listado/listado.component';
import {FormModalComponent} from './components/form-modal/form-modal.component';
import {ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../../../shared/shared.module';



@NgModule({
  declarations: [ParametrosPatronComponent, ListadoComponent, FormModalComponent],
    imports: [
        CommonModule,
        ParametrosPatronRoutingModule,
        ReactiveFormsModule,
        SharedModule
    ]
})
export class ParametrosPatronModule { }
