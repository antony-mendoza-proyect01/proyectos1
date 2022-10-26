import {Component, EventEmitter,  OnInit, Output, QueryList, ViewChildren} from '@angular/core';
import {Observable} from 'rxjs';
import { Store} from '@ngrx/store';
import {
  selectActionEspaciamiento,
  selectActionEspaciamientoEdit,
  selectListEspaciamiento, selectListEspaciamientoFiltro,
  selectLoadingEspaciamiento
} from '../../state/parametros-espaciamiento.selectors';
import {Espaciamiento} from '../../../../../data/models/espaciamiento';
import {NgbdSortableHeader, SortEvent} from '../../../../../shared/directives/sort.directive';
import {AppState} from '../../../../../app.state';
import {paginatorParametrosEspaciamiento, sortParametrosEspaciamiento} from '../../state/parametros-espaciamiento.actions';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {
  @Output() edit = new EventEmitter<Espaciamiento>();
  @Output() delete = new EventEmitter<Espaciamiento>();
  espaciamientos$: Observable<Espaciamiento[]> = new Observable();
  espaciamientosAux$: Observable<Espaciamiento[]> = new Observable();
  loading$: Observable<boolean> = new Observable();
  action$: Observable<boolean> = new Observable();
  espaciamientoEdit$: Espaciamiento = new Espaciamiento();

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;// sort

  constructor(
    private store: Store<AppState>,
  ) { }

  ngOnInit(): void {
    this.espaciamientos$ = this.store.select(selectListEspaciamiento);// listado de la tabla
    this.espaciamientosAux$ = this.store.select(selectListEspaciamientoFiltro);// listado de la tabla
    this.loading$ = this.store.select(selectLoadingEspaciamiento);// cargue true o false
    this.action$ = this.store.select(selectActionEspaciamiento);// acciones true o false
    // acciones edit personal
    this.store.select(selectActionEspaciamientoEdit).subscribe(x => {this.espaciamientoEdit$ = x;});
  }

  _edit(Espaciamiento: Espaciamiento) {
    this.edit.emit(Espaciamiento);
  }

  _delete(Espaciamiento: Espaciamiento) {
    this.delete.emit(Espaciamiento);
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
      this.store.dispatch(sortParametrosEspaciamiento({column, direction}));
    }
  }

  onItemsPaginado(paginator) {
    this.store.dispatch(paginatorParametrosEspaciamiento({paginator}));
  }
}
