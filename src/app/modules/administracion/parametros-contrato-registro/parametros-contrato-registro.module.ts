import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ParametrosContratoRegistroRoutingModule} from './parametros-contrato-registro-routing.module';
import {ListadoComponent} from './components/listado/listado.component';
import {FormModalComponent} from './components/form-modal/form-modal.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../../../shared/shared.module';
import {ParametrosContratosRegistroComponent} from './parametros-contrato-registro.component';
import {
  FormModalTarifasRegistrosComponent
} from './components/form-modal-tarifas-registros/form-modal-tarifas-registros.component';
import {ListadoTipoRegistroComponent} from './components/listado-tarifa-registros/listado-tipo-registro.component';
import {CurrencyMaskInputMode, NgxCurrencyModule} from 'ngx-currency';

@NgModule({
  declarations: [ParametrosContratosRegistroComponent,
    FormModalTarifasRegistrosComponent,
    ListadoComponent,
    FormModalComponent,
    ListadoTipoRegistroComponent,
  ],
  imports: [
    CommonModule,
    ParametrosContratoRegistroRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    FormsModule,
    NgxCurrencyModule,
  ]
})
export class ParametrosContratoRegistroModule { }
