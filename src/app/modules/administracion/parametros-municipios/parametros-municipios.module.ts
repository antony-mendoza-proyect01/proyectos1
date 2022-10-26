import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ParametrosMunicipiosRoutingModule} from './parametros-municipios-routing.module';
import { ParametrosMunicipiosComponent} from './parametros-municipios.component';
import {ListadoComponent} from './components/listado/listado.component';
import {FormModalComponent} from './components/form-modal/form-modal.component';
import {ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../../../shared/shared.module';



@NgModule({
  declarations: [ParametrosMunicipiosComponent, ListadoComponent, FormModalComponent],
    imports: [
        CommonModule,
        ParametrosMunicipiosRoutingModule,
        ReactiveFormsModule,
        SharedModule
    ]
})
export class ParametrosMunicipiosModule { }
