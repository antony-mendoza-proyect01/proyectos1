import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ParametrosTipoPozosRoutingModule} from './parametros-tipo-pozos-routing.module';
import {ParametrosTipoPozosComponent} from './parametros-tipo-pozos.component';
import {ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../../../shared/shared.module';
import { ListadoComponent } from './components/listado/listado.component';
import { FormModalComponent } from './components/form-modal/form-modal.component';



@NgModule({
  declarations: [ParametrosTipoPozosComponent, ListadoComponent, FormModalComponent],
    imports: [
        CommonModule,
        ParametrosTipoPozosRoutingModule,
        ReactiveFormsModule,
        SharedModule
    ]
})
export class ParametrosTipoPozosModule { }
