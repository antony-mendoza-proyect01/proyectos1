import {Component, EventEmitter,  OnInit, Output, QueryList, ViewChildren} from '@angular/core';
import {Observable} from 'rxjs';
import { Store} from '@ngrx/store';

import {
  selectActionMateriales,
  selectActionMaterialesEdit,
  selectListMateriales, selectListMaterialesFiltro,
  selectLoadingMateriales
} from '../../state/parametros-materiales.selectors';
import {paginatorParametrosMateriales, sortParametrosMateriales} from "../../state/parametros-materiales.actions";
import {Materiales} from '../../../../../data/models/materiales';
import {NgbdSortableHeader, SortEvent} from '../../../../../shared/directives/sort.directive';
import {AppState} from '../../../../../app.state';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {
  @Output() edit = new EventEmitter<Materiales>();
  @Output() delete = new EventEmitter<Materiales>();
  materiales$: Observable<Materiales[]> = new Observable();
  materialesAux$: Observable<Materiales[]> = new Observable();
  loading$: Observable<boolean> = new Observable();
  action$: Observable<boolean> = new Observable();
  materialEdit$: Materiales = new Materiales();

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;// sort

  constructor(
    private store: Store<AppState>,
  ) { }

  ngOnInit(): void {
    this.materiales$ = this.store.select(selectListMateriales);// listado de la tabla
    this.materialesAux$ = this.store.select(selectListMaterialesFiltro);// listado de la tabla
    this.loading$ = this.store.select(selectLoadingMateriales);// cargue true o false
    this.action$ = this.store.select(selectActionMateriales);// acciones true o false
    // acciones edit personal
    this.store.select(selectActionMaterialesEdit).subscribe(x => {this.materialEdit$ = x;});
  }

  _edit(Materiales: Materiales) {
    this.edit.emit(Materiales);
  }

  _delete(Materiales: Materiales) {
    this.delete.emit(Materiales);
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
      // this.materiales$ = this.materialesAux$;
    } else {
      this.store.dispatch(sortParametrosMateriales({column, direction}));
    }
  }

  onItemsPaginado(paginator) {
    this.store.dispatch(paginatorParametrosMateriales({paginator}));
  }
}
