import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DescripcionNucleosComponent} from './descripcion-nucleos.component';
import {DescripcionNucleosRoutingModule} from './descripcion-nucleos-routing.module';
import { InfoComponent } from './components/info/info.component';
import { InfoDetailSuperficieComponent } from './components/info-detail-superficie/info-detail-superficie.component';
import { FormDescripcionLitofaceComponent } from './components/form-descripcion-litoface/form-descripcion-litoface.component';
import { FormCaracteristicasTectonicaComponent } from './components/form-caracteristicas-tectonica/form-caracteristicas-tectonica.component';
import {ReactiveFormsModule} from '@angular/forms';
import { FormCaracteristicasSedimentariasComponent } from './components/form-caracteristicas-sedimentarias/form-caracteristicas-sedimentarias.component';
import { FormModalComponent } from './components/form-modal/form-modal.component';



@NgModule({
  declarations: [DescripcionNucleosComponent, InfoComponent, InfoDetailSuperficieComponent, FormDescripcionLitofaceComponent, FormCaracteristicasTectonicaComponent, FormCaracteristicasSedimentariasComponent, FormModalComponent],
    imports: [
        CommonModule,
        DescripcionNucleosRoutingModule,
        ReactiveFormsModule
    ]
})
export class DescripcionNucleosModule { }
