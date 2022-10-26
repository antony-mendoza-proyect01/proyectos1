import {Component, EventEmitter,  OnInit, Output, QueryList, ViewChildren} from '@angular/core';
import {Observable} from 'rxjs';
import { Store} from '@ngrx/store';
import {
  selectActionDescripcionTectonicas,
  selectActionDescripcionTectonicasEdit,
  selectListDescripcionTectonicas,
  selectListDescripcionTectonicasFiltro, selectLoadinDescripcionTectonicas,

} from '../../state/parametros-descripcion-tectonica.selectors';

import {NgbdSortableHeader, SortEvent} from '../../../../../shared/directives/sort.directive';
import {AppState} from '../../../../../app.state';
import {paginatorParametrosDescripcionTectonica, sortParametrosDescripcionTectonica} from '../../state/parametros-descripcion-tectonica.actions';
import {DescripcionTectonica} from "../../../../../data/models/descripcion-tectonica";
@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {
  @Output() edit = new EventEmitter<DescripcionTectonica>();
  @Output() delete = new EventEmitter<DescripcionTectonica>();
  descripcionTectonicas$: Observable<DescripcionTectonica[]> = new Observable();
  descripcionTectonicasAux$: Observable<DescripcionTectonica[]> = new Observable();
  loading$: Observable<boolean> = new Observable();
  action$: Observable<boolean> = new Observable();
  descripcionTectonicaEdit$: DescripcionTectonica = new DescripcionTectonica();

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;// sort

  constructor(
    private store: Store<AppState>,
  ) { }

  ngOnInit(): void {
    this.descripcionTectonicas$ = this.store.select(selectListDescripcionTectonicas);// listado de la tabla
    this.descripcionTectonicasAux$ = this.store.select(selectListDescripcionTectonicasFiltro);// listado de la tabla
    this.loading$ = this.store.select(selectLoadinDescripcionTectonicas);// cargue true o false
    this.action$ = this.store.select(selectActionDescripcionTectonicas);// acciones true o false
    // acciones edit personal
    this.store.select(selectActionDescripcionTectonicasEdit).subscribe(x => {this.descripcionTectonicaEdit$ = x;});
  }

  _edit(DescripcionTectonica: DescripcionTectonica) {
    this.edit.emit(DescripcionTectonica);
  }

  _delete(DescripcionTectonica: DescripcionTectonica) {
    this.delete.emit(DescripcionTectonica);
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
      // this.DescripcionTectonicas$ = this.DescripcionTectonicasAux$;
    } else {
      this.store.dispatch(sortParametrosDescripcionTectonica({column, direction}));
    }
  }

  onItemsPaginado(paginator) {
    this.store.dispatch(paginatorParametrosDescripcionTectonica({paginator}));
  }
}

