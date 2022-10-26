import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {AppState} from '../../../../../app.state';
import {PaginatorService} from '../../../../../shared/services/paginator.service';
import {
  createModalParametrosContratoPerforacionAjustesDesviacion, deleteParametrosContratoPerforacionAjustesDesviacion,
  editModalParametrosContratoPerforacionAjustesDesviacion,
  paginatorParametrosContratoPerforacionAjustesDesviacion
} from '../../state/state-ajustes-desviaciones/parametros-contratos-perforacion-ajustes-desviacion.actions';

import {ContratoPerforacionAjustesDesviacion} from "../../../../../data/models/ajustes-desviacion";
import {
  selectActionContratoPerforacionAjustesDesviacion,
  selectActionContratoPerforacionAjustesDesviacionCodContrato,
  selectActionContratoPerforacionAjustesDesviacionEdit,
  selectActionContratoPerforacionAjustesDesviacionTipoPozo,
  selectListContratoPerforacionAjustesDesviacionFiltro,
  selectLoadinParametrosContratoPerforacionAjustesDesviacion,
  selectParametrosListContratoPerforacionAjustesDesviacion
} from "../../state/state-ajustes-desviaciones/parametros-contratos-perforacion-ajustes-desviacion.selectors";

@Component({
  selector: 'app-listado-ajustes-desviacion',
  templateUrl: './listado-ajustes-desviacion.component.html',
  styleUrls: ['./listado-ajustes-desviacion.component.scss']
})
export class  ListadoAjustesDesviacionComponent implements OnInit {
  contratosAjutesDesviaciones$: Observable<ContratoPerforacionAjustesDesviacion[]> = new Observable();
  contratosAjutesDesviacionesAux$: Observable<ContratoPerforacionAjustesDesviacion[]> = new Observable();
  loading$: Observable<boolean> = new Observable();
  action$: Observable<boolean> = new Observable();
  contratosAjutesDesviacionEdit$: ContratoPerforacionAjustesDesviacion = new ContratoPerforacionAjustesDesviacion();
  codContrato$: string = '';
  tipoPozo$: string = '';

  constructor(
    private store: Store<AppState>,
    private paginatorService: PaginatorService
  ) { }

  ngOnInit(): void {
    this.contratosAjutesDesviaciones$ = this.store.select(selectParametrosListContratoPerforacionAjustesDesviacion);// listado de la tabla
    this.contratosAjutesDesviacionesAux$ = this.store.select(selectListContratoPerforacionAjustesDesviacionFiltro);// listado de la tabla
    this.loading$ = this.store.select(selectLoadinParametrosContratoPerforacionAjustesDesviacion);// cargue true o false
    this.action$ = this.store.select(selectActionContratoPerforacionAjustesDesviacion);// acciones true o false
    // acciones edit
    this.store.select(selectActionContratoPerforacionAjustesDesviacionEdit).subscribe(x => {this.contratosAjutesDesviacionEdit$ = x;});
    this.store.select(selectActionContratoPerforacionAjustesDesviacionCodContrato).subscribe(x => {this.codContrato$ = x;});
    this.store.select(selectActionContratoPerforacionAjustesDesviacionTipoPozo).subscribe(x => {this.tipoPozo$ = x;});
  }

  onCreate() {
    this.store.dispatch(createModalParametrosContratoPerforacionAjustesDesviacion(
      {edit: new ContratoPerforacionAjustesDesviacion(null, this.codContrato$, this.tipoPozo$ )}));
    this.paginatorService.initial();
  }

  onEdit(edit: ContratoPerforacionAjustesDesviacion) {
    this.store.dispatch(editModalParametrosContratoPerforacionAjustesDesviacion({edit}));
  }

  onDelete(edit: ContratoPerforacionAjustesDesviacion) {
    this.store.dispatch(deleteParametrosContratoPerforacionAjustesDesviacion({edit}));
  }

  onItemsPaginado(paginator) {
    this.store.dispatch(paginatorParametrosContratoPerforacionAjustesDesviacion({paginator}));
  }
}
