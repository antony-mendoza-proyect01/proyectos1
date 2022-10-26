import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CalibracionDepmeterRoutingModule} from './calibracion-depmeter-routing.module';
import {CalibracionDepmeterComponent} from './calibracion-depmeter.component';
import { FormModalComponent } from './components/form-modal/form-modal.component';
import { ListadoComponent } from './components/listado/listado.component';
import {SharedModule} from "../../../shared/shared.module";



@NgModule({
  declarations: [CalibracionDepmeterComponent, FormModalComponent, ListadoComponent],
    imports: [
        CommonModule,
        CalibracionDepmeterRoutingModule,
        SharedModule
    ]
})
export class CalibracionDepmeterModule { }
