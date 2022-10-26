import {Component, EventEmitter,  OnInit, Output, QueryList, ViewChildren} from '@angular/core';
import {Observable} from 'rxjs';
import { Store} from '@ngrx/store';
import {
  selectActionTipoPerforaciones,
  selectActionTipoPerforacionesEdit,
  selectListTipoPerforaciones, selectListTipoPerforacionesFiltro,
  selectLoadingTipoPerforaciones
} from '../../state/parametros-tipo-perforaciones.selectors';

import {NgbdSortableHeader, SortEvent} from '../../../../../shared/directives/sort.directive';
import {AppState} from '../../../../../app.state';
import {paginatorParametrosTipoPerforaciones, sortParametrosTipoPerforaciones} from '../../state/parametros-tipo-perforaciones.actions';
import {TipoPerforaciones} from "../../../../../data/models/tipo-perforaciones";
@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {
  @Output() edit = new EventEmitter<TipoPerforaciones>();
  @Output() delete = new EventEmitter<TipoPerforaciones>();
  perforaciones$: Observable<TipoPerforaciones[]> = new Observable();
  perforacionesAux$: Observable<TipoPerforaciones[]> = new Observable();
  loading$: Observable<boolean> = new Observable();
  action$: Observable<boolean> = new Observable();
  perforacionEdit$: TipoPerforaciones = new TipoPerforaciones();

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;// sort

  constructor(
    private store: Store<AppState>,
  ) { }

  ngOnInit(): void {
    this.perforaciones$ = this.store.select(selectListTipoPerforaciones);// listado de la tabla
    this.perforacionesAux$ = this.store.select(selectListTipoPerforacionesFiltro);// listado de la tabla
    this.loading$ = this.store.select(selectLoadingTipoPerforaciones);// cargue true o false
    this.action$ = this.store.select(selectActionTipoPerforaciones);// acciones true o false
    // acciones edit personal
    this.store.select(selectActionTipoPerforacionesEdit).subscribe(x => {this.perforacionEdit$ = x;});
  }

  _edit(TipoPerforaciones: TipoPerforaciones) {
    this.edit.emit(TipoPerforaciones);
  }

  _delete(TipoPerforaciones: TipoPerforaciones) {
    this.delete.emit(TipoPerforaciones);
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
      // this.TipoPerforaciones$ = this.TipoPerforacionesAux$;
    } else {
      this.store.dispatch(sortParametrosTipoPerforaciones({column, direction}));
    }
  }

  onItemsPaginado(paginator) {
    this.store.dispatch(paginatorParametrosTipoPerforaciones({paginator}));
  }
}
