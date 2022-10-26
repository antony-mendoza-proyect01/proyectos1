import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ParametrosOrigenDatosRoutingModule} from './parametros-origen-datos-routing.module';
import {ParametrosOrigenDatosComponent} from './parametros-origen-datos.component';
import {ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../../../shared/shared.module';
import {ListadoComponent} from "./components/listado/listado.component";
import { FormModalComponent } from './components/form-modal/form-modal.component';



@NgModule({
  declarations: [ParametrosOrigenDatosComponent, ListadoComponent, FormModalComponent],
    imports: [
        CommonModule,
        ParametrosOrigenDatosRoutingModule,
        ReactiveFormsModule,
        SharedModule
    ]
})
export class ParametrosOrigenDatosModule { }
