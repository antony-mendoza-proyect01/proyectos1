import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ParametrosContratoPerforacionRoutingModule} from './parametros-contrato-perforacion-routing.module';
import {ListadoComponent} from './components/listado/listado.component';
import {FormModalComponent} from './components/form-modal/form-modal.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../../../shared/shared.module';
import {
  ParametrosContratosPerforacionComponent,
} from './parametros-contrato-perforacion.component';
import {NgxCurrencyModule} from 'ngx-currency';
import { FormSelectTipoPozoComponent } from './components/form-select-tipo-pozo/form-select-tipo-pozo.component';
import { ListadoTarifaComponent } from './components/listado-tarifa/listado-tarifa.component';
import { SeleccionComponent } from './components/seleccion/seleccion.component';
import {FormModalTarifaComponent} from './components/form-modal-tarifa/form-modal-tarifa.component';
import { ListadoAjustesPorcentajeRecuperacionComponent } from './components/listado-ajustes-porcentaje-recuperacion/listado-ajustes-porcentaje-recuperacion.component';
import { ListadoAjustesPorcentajeVerticalidadComponent } from './components/listado-ajustes-porcentaje-verticalidad/listado-ajustes-porcentaje-verticalidad.component';
import { ListadoAjustesDesviacionComponent } from './components/listado-ajustes-desviacion/listado-ajustes-desviacion.component';
import { FormModalAjutesDesviacionComponent } from './components/form-modal-ajutes-desviacion/form-modal-ajutes-desviacion.component';
import { FormModalAjutesPorcentajeRecuperacionComponent } from './components/form-modal-ajutes-porcentaje-recuperacion/form-modal-ajutes-porcentaje-recuperacion.component';
import { FormModalAjutesPorcentajeVerticalidadComponent } from './components/form-modal-ajutes-porcentaje-verticalidad/form-modal-ajutes-porcentaje-verticalidad.component';

@NgModule({
  declarations: [ParametrosContratosPerforacionComponent,
    ListadoComponent,
    FormModalComponent,
    FormSelectTipoPozoComponent,
    ListadoTarifaComponent,
    ListadoAjustesDesviacionComponent,
    ListadoAjustesPorcentajeVerticalidadComponent,
    ListadoAjustesPorcentajeRecuperacionComponent,
    SeleccionComponent,
    FormModalTarifaComponent,
    FormModalAjutesDesviacionComponent,
    FormModalAjutesPorcentajeRecuperacionComponent,
    FormModalAjutesPorcentajeVerticalidadComponent
  ],
  imports: [
    CommonModule,
    ParametrosContratoPerforacionRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    FormsModule,
    NgxCurrencyModule,
  ]
})
export class ParametrosContratoPerforacionModule { }
