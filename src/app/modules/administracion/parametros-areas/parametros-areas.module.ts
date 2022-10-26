import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ParametrosAreasRoutingModule} from './parametros-areas-routing.module';
import {ParametrosAreasComponent} from './parametros-areas.component';
import {ListadoComponent} from './components/listado/listado.component';
import {FormModalComponent} from './components/form-modal/form-modal.component';
import {ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../../../shared/shared.module';



@NgModule({
  declarations: [ParametrosAreasComponent, ListadoComponent, FormModalComponent],
    imports: [
        CommonModule,
        ParametrosAreasRoutingModule,
        ReactiveFormsModule,
        SharedModule
    ]
})
export class ParametrosAreasModule { }
