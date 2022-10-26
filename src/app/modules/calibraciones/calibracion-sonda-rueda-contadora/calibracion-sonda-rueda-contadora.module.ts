import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CalibracionSondaRuedaContadoraRoutingModule} from './calibracion-sonda-rueda-contadora-routing.module';
import {CalibracionSondaRuedaContadoraComponent} from './calibracion-sonda-rueda-contadora.component';
import { FormModalComponent } from './components/form-modal/form-modal.component';
import { ListadoComponent } from './components/listado/listado.component';
import {SharedModule} from "../../../shared/shared.module";



@NgModule({
  declarations: [CalibracionSondaRuedaContadoraComponent, FormModalComponent, ListadoComponent],
    imports: [
        CommonModule,
        CalibracionSondaRuedaContadoraRoutingModule,
        SharedModule
    ]
})
export class CalibracionSondaRuedaContadoraModule { }
