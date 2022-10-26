import {Component, EventEmitter,  OnInit, Output, QueryList, ViewChildren} from '@angular/core';
import {Observable} from 'rxjs';
import { Store} from '@ngrx/store';

import {NgbdSortableHeader, SortEvent} from '../../../../../shared/directives/sort.directive';
import {AppState} from '../../../../../app.state';
import {Contratos} from '../../../../../data/models/contratos';
import {
  selectActionContratosPerforacion, selectActionContratosPerforacionEdit, selectDetailContratosPerforacion,
  selectListContratosPerforacion, selectListContratosPerforacionFiltro, selectLoadingContratosPerforacion
} from '../../state/parametros-contratos-perforacion.selectors';
import {
  detailParametrosContratosPerforacion,
  paginatorParametrosContratosPerforacion,
  sortParametrosContratosPerforacion
} from '../../state/parametros-contratos-perforacion.actions';
import {
  URL_PARAMETROS_CONTRATO_PERFORACION
} from '../../../../../core/const/navigation.const';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {
  @Output() edit = new EventEmitter<Contratos>();
  @Output() delete = new EventEmitter<Contratos>();
  contratosPerforacion$: Observable<Contratos[]> = new Observable();
  contratosPerforacionAux$: Observable<Contratos[]> = new Observable();
  loading$: Observable<boolean> = new Observable();
  action$: Observable<boolean> = new Observable();
  contratosPerforacionEdit$: Contratos = new Contratos();
  detailContratosPerforacion$: Contratos = new Contratos();

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;// sort

  urlContrato = URL_PARAMETROS_CONTRATO_PERFORACION;

  constructor(
    private store: Store<AppState>,
  ) { }

  ngOnInit(): void {
    this.contratosPerforacion$ = this.store.select(selectListContratosPerforacion);// listado de la tabla
    this.contratosPerforacionAux$ = this.store.select(selectListContratosPerforacionFiltro);// listado de la tabla
    this.loading$ = this.store.select(selectLoadingContratosPerforacion);// cargue true o false
    this.action$ = this.store.select(selectActionContratosPerforacion);// acciones true o false
    // acciones edit
    this.store.select(selectActionContratosPerforacionEdit).subscribe(x => {this.contratosPerforacionEdit$ = x;});
    this.store.select(selectDetailContratosPerforacion).subscribe(x => {this.detailContratosPerforacion$ = x;});

  }

  _edit(edit: Contratos) {
    this.edit.emit(edit);
  }

  _delete(edit: Contratos) {
    this.delete.emit(edit);
  }

  onSort({column, direction}: SortEvent) {
    // resetting other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    // sorting countries
    if (direction === '') {
      // this.Contratos$ = this.ContratosAux$;
    } else {
      this.store.dispatch(sortParametrosContratosPerforacion({column, direction}));
    }
  }

  onItemsPaginado(paginator) {
    this.store.dispatch(paginatorParametrosContratosPerforacion({paginator}));
  }

  onDetail(edit: Contratos) {
    this.store.dispatch(detailParametrosContratosPerforacion({edit}));
  }

}
