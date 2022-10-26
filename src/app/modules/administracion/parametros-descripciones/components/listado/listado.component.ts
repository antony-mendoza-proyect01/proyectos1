import {Component, EventEmitter,  OnInit, Output, QueryList, ViewChildren} from '@angular/core';
import {Observable} from 'rxjs';
import { Store} from '@ngrx/store';

import {
  selectActionDescripciones,
  selectActionDescripcionesEdit,
  selectListDescripciones, selectListDescripcionesFiltro,
  selectLoadingDescripciones
} from '../../state/parametros-descripciones.selectors';
import {paginatorParametrosDescripciones, sortParametrosDescripciones} from '../../state/parametros-descripciones.actions';
import { Descripciones } from 'src/app/data/models/descripciones';
import {NgbdSortableHeader, SortEvent} from '../../../../../shared/directives/sort.directive';
import {AppState} from '../../../../../app.state';


@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {
  @Output() edit = new EventEmitter<Descripciones>();
  @Output() delete = new EventEmitter<Descripciones>();
  descripciones$: Observable<Descripciones[]> = new Observable();
  descripcionesAux$: Observable<Descripciones[]> = new Observable();
  loading$: Observable<boolean> = new Observable();
  action$: Observable<boolean> = new Observable();
  descripcionEdit$: Descripciones = new Descripciones();

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;// sort

  constructor(
    private store: Store<AppState>,
  ) { }

  ngOnInit(): void {
    this.descripciones$ = this.store.select(selectListDescripciones);// listado de la tabla
    this.descripcionesAux$ = this.store.select(selectListDescripcionesFiltro);// listado de la tabla
    this.loading$ = this.store.select(selectLoadingDescripciones);// cargue true o false
    this.action$ = this.store.select(selectActionDescripciones);// acciones true o false
    // acciones edit personal
    this.store.select(selectActionDescripcionesEdit).subscribe(x => {this.descripcionEdit$ = x;});
  }

  _edit(Descripciones: Descripciones) {
    this.edit.emit(Descripciones);
  }

  _delete(Descripciones: Descripciones) {
    this.delete.emit(Descripciones);
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
      // this.areas$ = this.areasAux$;
    } else {
      this.store.dispatch(sortParametrosDescripciones({column, direction}));
    }
  }

  onItemsPaginado(paginator) {
    this.store.dispatch(paginatorParametrosDescripciones({paginator}));
  }
}
