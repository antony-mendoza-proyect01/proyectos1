import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CalibracionSuceptibilidadMagneticaRoutingModule} from './calibracion-suceptibilidad-magnetica-routing.module';
import {CalibracionSuceptibilidadMagneticaComponent} from './calibracion-suceptibilidad-magnetica.component';
import { FormModalComponent } from './components/form-modal/form-modal.component';
import { ListadoComponent } from './components/listado/listado.component';
import {SharedModule} from "../../../shared/shared.module";



@NgModule({
  declarations: [CalibracionSuceptibilidadMagneticaComponent, FormModalComponent, ListadoComponent],
    imports: [
        CommonModule,
        CalibracionSuceptibilidadMagneticaRoutingModule,
        SharedModule
    ]
})
export class CalibracionSuceptibilidadMagneticaModule { }
