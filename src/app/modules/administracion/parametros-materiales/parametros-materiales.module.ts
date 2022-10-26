import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ParametrosMaterialesRoutingModule} from './parametros-materiales-routing.module';
import {ParametrosMaterialesComponent} from './parametros-materiales.component';
import {ListadoComponent} from './components/listado/listado.component';
import {FormModalComponent} from './components/form-modal/form-modal.component';
import {ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../../../shared/shared.module';



@NgModule({
  declarations: [ParametrosMaterialesComponent, ListadoComponent, FormModalComponent],
    imports: [
        CommonModule,
        ParametrosMaterialesRoutingModule,
        ReactiveFormsModule,
        SharedModule
    ]
})
export class ParametrosMaterialesModule { }
