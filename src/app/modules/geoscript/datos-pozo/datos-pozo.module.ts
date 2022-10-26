import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DatosPozoRoutingModule} from './datos-pozo-routing.module';
import {DatosPozoComponent} from './datos-pozo.component';
import { ListadoTipoRegistroComponent } from './components/listado-tipo-registro/listado-tipo-registro.component';
import { FormComponent } from './components/form/form.component';
import { DetailComponent } from './components/detail/detail.component';
import {ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from '../../../shared/shared.module';



@NgModule({
    declarations: [
        DatosPozoComponent,
        ListadoTipoRegistroComponent,
        FormComponent,
        DetailComponent,
    ],
  imports: [
    CommonModule,
    DatosPozoRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class DatosPozoModule { }
