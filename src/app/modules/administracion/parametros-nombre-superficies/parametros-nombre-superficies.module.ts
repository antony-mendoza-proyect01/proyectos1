import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ParametrosNombreSuperficiesRoutingModule} from './parametros-nombre-superficies-routing.module';
import {ParametrosNombreSuperficiesComponent} from './parametros-nombre-superficies.component';
import {ListadoComponent} from './components/listado/listado.component';
import {FormModalComponent} from './components/form-modal/form-modal.component';
import {ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../../../shared/shared.module';
import { ColorSketchModule } from 'ngx-color/sketch';




@NgModule({
  declarations: [ParametrosNombreSuperficiesComponent, ListadoComponent, FormModalComponent],
    imports: [
        CommonModule,
        ParametrosNombreSuperficiesRoutingModule,
        ReactiveFormsModule,
        SharedModule,
        ColorSketchModule
    ]
})
export class ParametrosNombreSuperficiesModule { }
