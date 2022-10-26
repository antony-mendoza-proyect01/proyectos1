import {Component, EventEmitter,  OnInit, Output, QueryList, ViewChildren} from '@angular/core';
import {Observable} from 'rxjs';
import { Store} from '@ngrx/store';
import {
  selectActionGranos,
  selectActionGranosEdit,
  selectListGranos, selectListGranosFiltro,
  selectLoadingGranos
} from '../../state/parametros-granos.selectors';
import {Granos} from '../../../../../data/models/granos';
import {NgbdSortableHeader, SortEvent} from '../../../../../shared/directives/sort.directive';
import {AppState} from '../../../../../app.state';
import {paginatorParametrosGranos, sortParametrosGranos} from '../../state/parametros-granos.actions';
@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {
  @Output() edit = new EventEmitter<Granos>();
  @Output() delete = new EventEmitter<Granos>();
  granos$: Observable<Granos[]> = new Observable();
  granosAux$: Observable<Granos[]> = new Observable();
  loading$: Observable<boolean> = new Observable();
  action$: Observable<boolean> = new Observable();
  granoEdit$: Granos = new Granos();

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;// sort

  constructor(
    private store: Store<AppState>,
  ) { }

  ngOnInit(): void {
    this.granos$ = this.store.select(selectListGranos);// listado de la tabla
    this.granosAux$ = this.store.select(selectListGranosFiltro);// listado de la tabla
    this.loading$ = this.store.select(selectLoadingGranos);// cargue true o false
    this.action$ = this.store.select(selectActionGranos);// acciones true o false
    // acciones edit personal
    this.store.select(selectActionGranosEdit).subscribe(x => {this.granoEdit$ = x;});
  }

  _edit(Granos: Granos) {
    this.edit.emit(Granos);
  }

  _delete(Granos: Granos) {
    this.delete.emit(Granos);
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
      // this.Granos$ = this.GranosAux$;
    } else {
      this.store.dispatch(sortParametrosGranos({column, direction}));
    }
  }

  onItemsPaginado(paginator) {
    this.store.dispatch(paginatorParametrosGranos({paginator}));
  }
}
