import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ParametrosGeologosRoutingModule} from './parametros-geologos-routing.module';
import {ParametrosGeologosComponent} from './parametros-geologos.component';
import {ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../../../shared/shared.module';
import { ListadoComponent } from './components/listado/listado.component';
import {FormModalComponent} from "./components/form-modal/form-modal.component";





@NgModule({
  declarations: [ParametrosGeologosComponent,  ListadoComponent, FormModalComponent],
    imports: [
        CommonModule,
        ParametrosGeologosRoutingModule,
        ReactiveFormsModule,
        SharedModule
    ]
})
export class ParametrosGeologosModule { }
