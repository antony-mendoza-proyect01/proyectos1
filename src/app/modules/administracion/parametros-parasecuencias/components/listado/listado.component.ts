import {Component, EventEmitter,  OnInit, Output, QueryList, ViewChildren} from '@angular/core';
import {Observable} from 'rxjs';
import { Store} from '@ngrx/store';
import {
  selectActionGParasecuencias,
  selectActionGParasecuenciasEdit,
  selectListGParasecuencias, selectListGParasecuenciasFiltro,
  selectLoadingGParasecuencias
} from '../../state/parametros-parasecuencias.selectors';
import {Parasecuencias} from '../../../../../data/models/parasecuencias';
import {NgbdSortableHeader, SortEvent} from '../../../../../shared/directives/sort.directive';
import {AppState} from '../../../../../app.state';
import {paginatorParametrosParasecuencias, sortParametrosParasecuencias} from '../../state/parametros-parasecuencias.actions';
@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {
  @Output() edit = new EventEmitter<Parasecuencias>();
  @Output() delete = new EventEmitter<Parasecuencias>();
  perasecuencias$: Observable<Parasecuencias[]> = new Observable();
  perasecuenciasAux$: Observable<Parasecuencias[]> = new Observable();
  loading$: Observable<boolean> = new Observable();
  action$: Observable<boolean> = new Observable();
  perasecuenciaEdit$: Parasecuencias = new Parasecuencias();

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;// sort

  constructor(
    private store: Store<AppState>,
  ) { }

  ngOnInit(): void {
    this.perasecuencias$ = this.store.select(selectListGParasecuencias);// listado de la tabla
    this.perasecuenciasAux$ = this.store.select(selectListGParasecuenciasFiltro);// listado de la tabla
    this.loading$ = this.store.select(selectLoadingGParasecuencias);// cargue true o false
    this.action$ = this.store.select(selectActionGParasecuencias);// acciones true o false
    // acciones edit personal
    this.store.select(selectActionGParasecuenciasEdit).subscribe(x => {this.perasecuenciaEdit$ = x;});
  }

  _edit(Parasecuencias: Parasecuencias) {
    this.edit.emit(Parasecuencias);
  }

  _delete(Parasecuencias: Parasecuencias) {
    this.delete.emit(Parasecuencias);
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
      // this.Parasecuencias$ = this.ParasecuenciasAux$;
    } else {
      this.store.dispatch(sortParametrosParasecuencias({column, direction}));
    }
  }

  onItemsPaginado(paginator) {
    this.store.dispatch(paginatorParametrosParasecuencias({paginator}));
  }
}
