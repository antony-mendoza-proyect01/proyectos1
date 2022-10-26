import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ParametrosFluidosRoutingModule} from './parametros-fluidos-routing.module';
import {ParametrosFluidosComponent} from './parametros-fluidos.component';
import {ListadoComponent} from './components/listado/listado.component';
import {FormModalComponent} from './components/form-modal/form-modal.component';
import {ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../../../shared/shared.module';



@NgModule({
  declarations: [ParametrosFluidosComponent, ListadoComponent, FormModalComponent],
    imports: [
        CommonModule,
        ParametrosFluidosRoutingModule,
        ReactiveFormsModule,
        SharedModule
    ]
})
export class ParametrosFluidosModule { }
