import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {
  selectActionContratoPerforacionAjustesRegistro,
  selectActionContratoPerforacionAjustesRegistroCodContrato,
  selectActionContratoPerforacionAjustesRegistroEdit, selectActionContratoPerforacionAjustesRegistroTipoPozo,
  selectListContratoPerforacionAjustesRegistroFiltro,
  selectLoadinParametrosContratoPerforacionAjustesRegistro,
  selectParametrosListContratoPerforacionAjustesRegistro
} from '../../state/state-ajustes-porcentaje-verticalidad-state/parametros-contratos-perforacion-porcentaje-verticalidad.selectors';
import {Store} from '@ngrx/store';
import {AppState} from '../../../../../app.state';
import {PaginatorService} from '../../../../../shared/services/paginator.service';
import {
  createModalParametrosContratoPerforacionAjustesRegistro, deleteParametrosContratoPerforacionAjustesRegistro,
  editModalParametrosContratoPerforacionAjustesRegistro,
  paginatorParametrosContratoPerforacionAjustesRegistro
} from '../../state/state-ajustes-porcentaje-verticalidad-state/parametros-contratos-perforacion-porcentaje-verticalidad.actions';
import {ContratoPerforacionAjustesRegistro} from "../../../../../data/models/ajustes-porcentaje-verticalidad";

@Component({
  selector: 'app-listado-ajustes-verticalidad',
  templateUrl: './listado-ajustes-porcentaje-verticalidad.component.html',
  styleUrls: ['./listado-ajustes-porcentaje-verticalidad.component.scss']
})
export class  ListadoAjustesPorcentajeVerticalidadComponent implements OnInit {
  contratosRegistros$: Observable<ContratoPerforacionAjustesRegistro[]> = new Observable();
  contratosRegistrosAux$: Observable<ContratoPerforacionAjustesRegistro[]> = new Observable();
  loading$: Observable<boolean> = new Observable();
  action$: Observable<boolean> = new Observable();
  contratosRegistroEdit$: ContratoPerforacionAjustesRegistro = new ContratoPerforacionAjustesRegistro();
  codContrato$: string = '';
  tipoPozo$: string = '';

  constructor(
    private store: Store<AppState>,
    private paginatorService: PaginatorService
  ) { }

  ngOnInit(): void {
    this.contratosRegistros$ = this.store.select(selectParametrosListContratoPerforacionAjustesRegistro);// listado de la tabla
    this.contratosRegistrosAux$ = this.store.select(selectListContratoPerforacionAjustesRegistroFiltro);// listado de la tabla
    this.loading$ = this.store.select(selectLoadinParametrosContratoPerforacionAjustesRegistro);// cargue true o false
    this.action$ = this.store.select(selectActionContratoPerforacionAjustesRegistro);// acciones true o false
    // acciones edit
    this.store.select(selectActionContratoPerforacionAjustesRegistroEdit).subscribe(x => {this.contratosRegistroEdit$ = x;});

    this.store.select(selectActionContratoPerforacionAjustesRegistroCodContrato).subscribe(x => {this.codContrato$ = x;});
    this.store.select(selectActionContratoPerforacionAjustesRegistroTipoPozo).subscribe(x => {this.tipoPozo$ = x;});
  }

  onCreate() {
    this.store.dispatch(createModalParametrosContratoPerforacionAjustesRegistro(
      {edit: new ContratoPerforacionAjustesRegistro(null, this.codContrato$, this.tipoPozo$ )}));
    this.paginatorService.initial();
  }

  onEdit(edit: ContratoPerforacionAjustesRegistro) {
    this.store.dispatch(editModalParametrosContratoPerforacionAjustesRegistro({edit}));
  }

  onDelete(edit: ContratoPerforacionAjustesRegistro) {
    this.store.dispatch(deleteParametrosContratoPerforacionAjustesRegistro({edit}));
  }

  onItemsPaginado(paginator) {
    this.store.dispatch(paginatorParametrosContratoPerforacionAjustesRegistro({paginator}));
  }
}
