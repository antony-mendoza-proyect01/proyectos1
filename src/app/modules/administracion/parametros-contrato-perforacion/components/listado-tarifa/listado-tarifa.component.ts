import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {
  selectActionContratosPerforacionTarifa,
  selectActionContratosPerforacionTarifaCodContrato,
  selectActionContratosPerforacionTarifaEdit, selectActionContratosPerforacionTarifaTipoPozo,
  selectListContratosPerforacionTarifaFiltro,
  selectLoadinParametrosContratosPerforacionTarifa,
  selectParametrosListContratosPerforacionTarifa
} from '../../state/state-tarifa/parametros-contratos-perforacion-tarifa.selectors';
import {Store} from '@ngrx/store';
import {AppState} from '../../../../../app.state';
import {Tarifas} from '../../../../../data/models/tarifas';
import {PaginatorService} from '../../../../../shared/services/paginator.service';
import {
  createModalParametrosContratosPerforacionTarifas, deleteParametrosContratosPerforacionTarifas,
  editModalParametrosContratosPerforacionTarifas,
  paginatorParametrosContratosPerforacionTarifas
} from '../../state/state-tarifa/parametros-contratos-perforacion-tarifa.actions';


@Component({
  selector: 'app-listado-tarifa',
  templateUrl: './listado-tarifa.component.html',
  styleUrls: ['./listado-tarifa.component.scss']
})
export class  ListadoTarifaComponent implements OnInit {
  contratosPerforacionTarifa$: Observable<Tarifas[]> = new Observable();
  contratosPerforacionTarifaAux$: Observable<Tarifas[]> = new Observable();
  loading$: Observable<boolean> = new Observable();
  action$: Observable<boolean> = new Observable();
  contratosPerforacionTarifaEdit$: Tarifas = new Tarifas();
  codContrato$: string = '';
  tipoPozo$: string = '';

  constructor(
    private store: Store<AppState>,
    private paginatorService: PaginatorService
    ) { }

  ngOnInit(): void {
    this.contratosPerforacionTarifa$ = this.store.select(selectParametrosListContratosPerforacionTarifa);// listado de la tabla
    this.contratosPerforacionTarifaAux$ = this.store.select(selectListContratosPerforacionTarifaFiltro);// listado de la tabla
    this.loading$ = this.store.select(selectLoadinParametrosContratosPerforacionTarifa);// cargue true o false
    this.action$ = this.store.select(selectActionContratosPerforacionTarifa);// acciones true o false
    // acciones edit
    this.store.select(selectActionContratosPerforacionTarifaEdit).subscribe(x => {this.contratosPerforacionTarifaEdit$ = x;});

    this.store.select(selectActionContratosPerforacionTarifaCodContrato).subscribe(x => {this.codContrato$ = x;});
    this.store.select(selectActionContratosPerforacionTarifaTipoPozo).subscribe(x => {this.tipoPozo$ = x;});
  }

  onCreate() {
    this.store.dispatch(createModalParametrosContratosPerforacionTarifas(
      {edit: new Tarifas(null, this.codContrato$, this.tipoPozo$ )}));
    this.paginatorService.initial();
  }

  onEdit(edit: Tarifas) {
    this.store.dispatch(editModalParametrosContratosPerforacionTarifas({edit}));
  }

  onDelete(edit: Tarifas) {
    this.store.dispatch(deleteParametrosContratosPerforacionTarifas({edit}));
  }

  onItemsPaginado(paginator) {
    this.store.dispatch(paginatorParametrosContratosPerforacionTarifas({paginator}));
  }
}
