import {Component, EventEmitter,  OnInit, Output, QueryList, ViewChildren} from '@angular/core';
import {Observable} from 'rxjs';
import { Store} from '@ngrx/store';
import {
  selectActionFluidos,
  selectActionFluidosEdit,
  selectListFluidos, selectListFluidosFiltro,
  selectLoadingFluidos
} from '../../state/parametros-fluidos.selectors';

import { Fluidos } from 'src/app/data/models/fluidos';
import {NgbdSortableHeader, SortEvent} from '../../../../../shared/directives/sort.directive';
import {AppState} from '../../../../../app.state';
import {paginatorParametrosFluidos, sortParametrosFluidos} from '../../state/parametros-fluidos.actions';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {
  @Output() edit = new EventEmitter<Fluidos>();
  @Output() delete = new EventEmitter<Fluidos>();
  fluidos$: Observable<Fluidos[]> = new Observable();
  fluidosAux$: Observable<Fluidos[]> = new Observable();
  loading$: Observable<boolean> = new Observable();
  action$: Observable<boolean> = new Observable();
  fluidoEdit$: Fluidos = new Fluidos();

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;// sort

  constructor(
    private store: Store<AppState>,
  ) { }

  ngOnInit(): void {
    this.fluidos$ = this.store.select(selectListFluidos);// listado de la tabla
    this.fluidosAux$ = this.store.select(selectListFluidosFiltro);// listado de la tabla
    this.loading$ = this.store.select(selectLoadingFluidos);// cargue true o false
    this.action$ = this.store.select(selectActionFluidos);// acciones true o false
    // acciones edit personal
    this.store.select(selectActionFluidosEdit).subscribe(x => {this.fluidoEdit$ = x;});
  }

  _edit(Fluidos: Fluidos) {
    this.edit.emit(Fluidos);
  }

  _delete(Fluidos: Fluidos) {
    this.delete.emit(Fluidos);
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
      this.store.dispatch(sortParametrosFluidos({column, direction}));
    }
  }

  onItemsPaginado(paginator) {
    this.store.dispatch(paginatorParametrosFluidos({paginator}));
  }
}
