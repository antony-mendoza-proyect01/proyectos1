import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DatosCarbonComponent} from './datos-carbon.component';
import {DatosCarbonRoutingModule} from './datos-carbon-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import { FormModalComponent } from './components/form-modal/form-modal.component';
import { FormSuperficiePozoComponent } from './components/form-superficie-pozo/form-superficie-pozo.component';
import {DescripcionNucleosModule} from "../descripcion-nucleos/descripcion-nucleos.module";
import { InfoPozoComponent } from './components/info-pozo/info-pozo.component';
import {InfoDetailSuperficieComponent} from "./components/info-pozo-intervalo/info-pozo-intervalo.component";
import {ListadoSuperficiePozoComponent} from "./components/listado-superficie-pozo/listado-superficie-pozo.component";
import {SharedModule} from "../../../shared/shared.module";


@NgModule({
  declarations: [
    DatosCarbonComponent,
    FormModalComponent,
    FormSuperficiePozoComponent,
    InfoDetailSuperficieComponent,
    InfoPozoComponent,
    ListadoSuperficiePozoComponent],
  imports: [
    CommonModule,
    DatosCarbonRoutingModule,
    ReactiveFormsModule,
    DescripcionNucleosModule,
    SharedModule,
  ]
})
export class DatosCarbonModule { }
