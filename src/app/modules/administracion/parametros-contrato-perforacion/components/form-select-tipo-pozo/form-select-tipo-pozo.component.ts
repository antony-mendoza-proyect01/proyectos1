import {Component, Input, OnInit} from '@angular/core';
import {
  URL_PARAMETROS_CONTRATO_PERFORACION,
  URL_PARAMETROS_CONTRATO_PERFORACION__COMPONENTS__AJUSTES_DESVIACION,
  URL_PARAMETROS_CONTRATO_PERFORACION__COMPONENTS__AJUSTES_PORCENTAJE_RECUPERACION,
  URL_PARAMETROS_CONTRATO_PERFORACION__COMPONENTS__AJUSTES_PORCENTAJE_VERTICALIDAD,
  URL_PARAMETROS_CONTRATO_PERFORACION__COMPONENTS__TARIFAS
} from '../../../../../core/const/navigation.const';
import {TipoPozos} from '../../../../../data/models/tipo-pozos';
import {getAllParametrosTipopozos} from '../../../parametros-tipo-pozos/state/parametros-tipo-pozos.actions';
import {Store} from '@ngrx/store';
import {AppState} from '../../../../../app.state';
import {Observable} from 'rxjs';
import {
  selectListTipopozosFiltro
} from '../../../parametros-tipo-pozos/state/parametros-tipo-pozos.selectors';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {
  getByCodContratoByTipoPozoParametrosContratosPerforacionTarifas
} from "../../state/state-tarifa/parametros-contratos-perforacion-tarifa.actions";
import { getByCodContratoByTipoPozoParametrosContratoPerforacionAjustesDesviacion } from '../../state/state-ajustes-desviaciones/parametros-contratos-perforacion-ajustes-desviacion.actions';
import { getByCodContratoByTipoPozoParametrosContratoPerforacionAjustesRecuperacion } from '../../state/state-ajustes-porcentaje-recuperacion/parametros-contratos-perforacion-porcentaje-recuperacion.actions';
import { getByCodContratoByTipoPozoParametrosContratoPerforacionAjustesRegistro } from '../../state/state-ajustes-porcentaje-verticalidad-state/parametros-contratos-perforacion-porcentaje-verticalidad.actions';

@Component({
  selector: 'app-form-select-tipo-pozo',
  templateUrl: './form-select-tipo-pozo.component.html',
  styleUrls: ['./form-select-tipo-pozo.component.scss']
})
export class FormSelectTipoPozoComponent implements OnInit {
  @Input() codContrato: string = '';

  urlContrato = URL_PARAMETROS_CONTRATO_PERFORACION;
  urlTarifas = URL_PARAMETROS_CONTRATO_PERFORACION__COMPONENTS__TARIFAS;
  urlAjustesDesviacion = URL_PARAMETROS_CONTRATO_PERFORACION__COMPONENTS__AJUSTES_DESVIACION;
  urlAjustesPorcentajeVerticalidad = URL_PARAMETROS_CONTRATO_PERFORACION__COMPONENTS__AJUSTES_PORCENTAJE_VERTICALIDAD;
  urlAjustesPorcentajeRecuperacion = URL_PARAMETROS_CONTRATO_PERFORACION__COMPONENTS__AJUSTES_PORCENTAJE_RECUPERACION;

  tipopozos$: Observable<TipoPozos[]> = new Observable();

  selectPozoForm: SelectPozoForm;
  submitted = false;



  constructor(private store: Store<AppState>,) { }

  ngOnInit(): void {
    this.store.dispatch(getAllParametrosTipopozos());// mandar a llamar la data
    this.tipopozos$ = this.store.select(selectListTipopozosFiltro);// listado de la tabla
    this.selectPozoForm = new SelectPozoForm('');

  }

  get f() { return this.selectPozoForm.controls; }

  change() {

  }

  disableAjustesPorcentajeVerticalidad(): boolean {
    return !(this.f['selected'].value === 'HQ3' || this.f['selected'].value === 'PCD');
  }

  disableAjustesPorcentajeRecuperacion(): boolean {
    return !(this.f['selected'].value === 'HQ3');
  }

  onTarifa() {
    this.store.dispatch(getByCodContratoByTipoPozoParametrosContratosPerforacionTarifas(
      {codContrato: this.codContrato, tipoPozo: this.f['selected'].value}));
  }
  onAjustesDesviacion() {
    this.store.dispatch(getByCodContratoByTipoPozoParametrosContratoPerforacionAjustesDesviacion(
      {codContrato: this.codContrato, tipoPozo: this.f['selected'].value}));
  }
  onAjustesPorcentajeVerticalidad() {
    this.store.dispatch(getByCodContratoByTipoPozoParametrosContratoPerforacionAjustesRegistro(
      {codContrato: this.codContrato, tipoPozo: this.f['selected'].value}));
  }
  onAjustesPorcentajeRecuperacion() {
    this.store.dispatch(getByCodContratoByTipoPozoParametrosContratoPerforacionAjustesRecuperacion(
      {codContrato: this.codContrato, tipoPozo: this.f['selected'].value}));
  }

}
// TODO: class para implementacion del formulario
export class SelectPozoForm extends FormGroup {
  constructor(selected : string) {
    super({
      selected: new FormControl(selected,[Validators.required]),
    });
  }
}
