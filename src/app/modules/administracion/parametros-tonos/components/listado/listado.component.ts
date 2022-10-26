import {Component, EventEmitter,  OnInit, Output, QueryList, ViewChildren} from '@angular/core';
import {Observable} from 'rxjs';
import { Store} from '@ngrx/store';
import {
  selectActionTonos,
  selectActionTonosEdit,
  selectListTonos, selectListTonosFiltro,
  selectLoadingTonos
} from '../../state/parametros-tonos.selectors';

import {NgbdSortableHeader, SortEvent} from '../../../../../shared/directives/sort.directive';
import {AppState} from '../../../../../app.state';
import {paginatorParametrosTonos, sortParametrosTonos} from '../../state/parametros-tonos.actions';
import {Tonos} from "../../../../../data/models/tono";
@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {
  @Output() edit = new EventEmitter<Tonos>();
  @Output() delete = new EventEmitter<Tonos>();
  tonos$: Observable<Tonos[]> = new Observable();
  tonosAux$: Observable<Tonos[]> = new Observable();
  loading$: Observable<boolean> = new Observable();
  action$: Observable<boolean> = new Observable();
  tonoEdit$: Tonos = new Tonos();

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;// sort

  constructor(
    private store: Store<AppState>,
  ) { }

  ngOnInit(): void {
    this.tonos$ = this.store.select(selectListTonos);// listado de la tabla
    this.tonosAux$ = this.store.select(selectListTonosFiltro);// listado de la tabla
    this.loading$ = this.store.select(selectLoadingTonos);// cargue true o false
    this.action$ = this.store.select(selectActionTonos);// acciones true o false
    // acciones edit personal
    this.store.select(selectActionTonosEdit).subscribe(x => {this.tonoEdit$ = x;});
  }

  _edit(Tonos: Tonos) {
    this.edit.emit(Tonos);
  }

  _delete(Tonos: Tonos) {
    this.delete.emit(Tonos);
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
      // this.Tonos$ = this.TonosAux$;
    } else {
      this.store.dispatch(sortParametrosTonos({column, direction}));
    }
  }

  onItemsPaginado(paginator) {
    this.store.dispatch(paginatorParametrosTonos({paginator}));
  }
}
