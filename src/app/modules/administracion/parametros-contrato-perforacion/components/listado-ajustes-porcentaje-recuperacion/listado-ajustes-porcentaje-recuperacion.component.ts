import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {
  selectActionContratoPerforacionAjustesRecuperacion,
  selectActionContratoPerforacionAjustesRecuperacionCodContrato,
  selectActionContratoPerforacionAjustesRecuperacionEdit, selectActionContratoPerforacionAjustesRecuperacionTipoPozo,
  selectListContratoPerforacionAjustesRecuperacionFiltro,
  selectLoadinParametrosContratoPerforacionAjustesRecuperacion,
  selectParametrosListContratoPerforacionAjustesRecuperacion
} from '../../state/state-ajustes-porcentaje-recuperacion/parametros-contratos-perforacion-porcentaje-recuperacion.selectors';
import {Store} from '@ngrx/store';
import {AppState} from '../../../../../app.state';
import {PaginatorService} from '../../../../../shared/services/paginator.service';
import {
  createModalParametrosContratoPerforacionAjustesRecuperacion, deleteParametrosContratoPerforacionAjustesRecuperacion,
  editModalParametrosContratoPerforacionAjustesRecuperacion,
  paginatorParametrosContratoPerforacionAjustesRecuperacion
} from '../../state/state-ajustes-porcentaje-recuperacion/parametros-contratos-perforacion-porcentaje-recuperacion.actions';

import {ContratoPerforacionAjustesRecuperacion} from "../../../../../data/models/ajustes-porcentaje-recuperacion";

@Component({
  selector: 'app-listado-ajustes-recuperacion',
  templateUrl: './listado-ajustes-porcentaje-recuperacion.component.html',
  styleUrls: ['./listado-ajustes-porcentaje-recuperacion.component.scss']
})
export class  ListadoAjustesPorcentajeRecuperacionComponent implements OnInit {
  contratoPerforacionAjustesRecuperaciones$: Observable<ContratoPerforacionAjustesRecuperacion[]> = new Observable();
  contratoPerforacionAjustesRecuperacionesAux$: Observable<ContratoPerforacionAjustesRecuperacion[]> = new Observable();
  loading$: Observable<boolean> = new Observable();
  action$: Observable<boolean> = new Observable();
  contratoPerforacionAjustesRecuperacionEdit$: ContratoPerforacionAjustesRecuperacion = new ContratoPerforacionAjustesRecuperacion();
  codContrato$: string = '';
  tipoPozo$: string = '';

  constructor(
    private store: Store<AppState>,
    private paginatorService: PaginatorService
  ) { }

  ngOnInit(): void {
    this.contratoPerforacionAjustesRecuperaciones$ = this.store.select(selectParametrosListContratoPerforacionAjustesRecuperacion);// listado de la tabla
    this.contratoPerforacionAjustesRecuperacionesAux$ = this.store.select(selectListContratoPerforacionAjustesRecuperacionFiltro);// listado de la tabla
    this.loading$ = this.store.select(selectLoadinParametrosContratoPerforacionAjustesRecuperacion);// cargue true o false
    this.action$ = this.store.select(selectActionContratoPerforacionAjustesRecuperacion);// acciones true o false
    // acciones edit
    this.store.select(selectActionContratoPerforacionAjustesRecuperacionEdit).subscribe(x => {this.contratoPerforacionAjustesRecuperacionEdit$ = x;});

    this.store.select(selectActionContratoPerforacionAjustesRecuperacionCodContrato).subscribe(x => {this.codContrato$ = x;});
    this.store.select(selectActionContratoPerforacionAjustesRecuperacionTipoPozo).subscribe(x => {this.tipoPozo$ = x;});
  }

  onCreate() {
    this.store.dispatch(createModalParametrosContratoPerforacionAjustesRecuperacion(
      {edit: new ContratoPerforacionAjustesRecuperacion(null, this.codContrato$, this.tipoPozo$ )}));
    this.paginatorService.initial();
  }

  onEdit(edit: ContratoPerforacionAjustesRecuperacion) {
    this.store.dispatch(editModalParametrosContratoPerforacionAjustesRecuperacion({edit}));
  }

  onDelete(edit: ContratoPerforacionAjustesRecuperacion) {
    this.store.dispatch(deleteParametrosContratoPerforacionAjustesRecuperacion({edit}));
  }

  onItemsPaginado(paginator) {
    this.store.dispatch(paginatorParametrosContratoPerforacionAjustesRecuperacion({paginator}));
  }
}
