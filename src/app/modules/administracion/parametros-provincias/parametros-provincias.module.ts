import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ParametrosProvinciasRoutingModule} from './parametros-provincias-routing.module';
import {ParametrosProvinciasComponent} from './parametros-provincias.component';
import {ListadoComponent} from './components/listado/listado.component';
import {FormModalComponent} from './components/form-modal/form-modal.component';
import {ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../../../shared/shared.module';



@NgModule({
  declarations: [ParametrosProvinciasComponent, ListadoComponent, FormModalComponent],
    imports: [
        CommonModule,
        ParametrosProvinciasRoutingModule,
        ReactiveFormsModule,
        SharedModule
    ]
})
export class ParametrosProvinciasModule { }
