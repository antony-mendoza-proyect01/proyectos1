import {Component, EventEmitter,  OnInit, Output, QueryList, ViewChildren} from '@angular/core';
import {Observable} from 'rxjs';
import { Store} from '@ngrx/store';
import {
  selectActionOrigenDatos,
  selectActionOrigenDatosEdit,
  selectListOrigenDatos, selectListOrigenDatosFiltro,
  selectLoadingOrigenDatos
} from '../../state/parametros-origen-datos.selectors';

import {NgbdSortableHeader, SortEvent} from '../../../../../shared/directives/sort.directive';
import {AppState} from '../../../../../app.state';
import {paginatorParametrosOrigenDatos, sortParametrosOrigenDatos} from '../../state/parametros-origen-datos.actions';
import {OrigenDatos} from "../../../../../data/models/origen-datos";
@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {
  @Output() edit = new EventEmitter<OrigenDatos>();
  @Output() delete = new EventEmitter<OrigenDatos>();
  origendatos$: Observable<OrigenDatos[]> = new Observable();
  origendatosAux$: Observable<OrigenDatos[]> = new Observable();
  loading$: Observable<boolean> = new Observable();
  action$: Observable<boolean> = new Observable();
  origendatoEdit$: OrigenDatos = new OrigenDatos();

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;// sort

  constructor(
    private store: Store<AppState>,
  ) { }

  ngOnInit(): void {
    this.origendatos$ = this.store.select(selectListOrigenDatos);// listado de la tabla
    this.origendatosAux$ = this.store.select(selectListOrigenDatosFiltro);// listado de la tabla
    this.loading$ = this.store.select(selectLoadingOrigenDatos);// cargue true o false
    this.action$ = this.store.select(selectActionOrigenDatos);// acciones true o false
    // acciones edit personal
    this.store.select(selectActionOrigenDatosEdit).subscribe(x => {this.origendatoEdit$ = x;});
  }

  _edit(OrigenDatos: OrigenDatos) {
    this.edit.emit(OrigenDatos);
  }

  _delete(OrigenDatos: OrigenDatos) {
    this.delete.emit(OrigenDatos);
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
      // this.OrigenDatos$ = this.OrigenDatosAux$;
    } else {
      this.store.dispatch(sortParametrosOrigenDatos({column, direction}));
    }
  }

  onItemsPaginado(paginator) {
    this.store.dispatch(paginatorParametrosOrigenDatos({paginator}));
  }
}
