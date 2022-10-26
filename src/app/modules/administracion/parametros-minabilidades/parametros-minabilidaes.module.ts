import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ParametrosMinabilidaesRoutingModule} from './parametros-minabilidaes-routing.module';
import {ParametrosMinabilidaesComponent} from './parametros-minabilidaes.component';
import {ListadoComponent} from './components/listado/listado.component';
import {FormModalComponent} from './components/form-modal/form-modal.component';
import {ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../../../shared/shared.module';



@NgModule({
  declarations: [ParametrosMinabilidaesComponent, ListadoComponent, FormModalComponent],
    imports: [
        CommonModule,
        ParametrosMinabilidaesRoutingModule,
        ReactiveFormsModule,
        SharedModule
    ]
})
export class ParametrosMinabilidaesModule { }
