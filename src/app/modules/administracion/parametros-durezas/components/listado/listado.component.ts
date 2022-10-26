import {Component, EventEmitter,  OnInit, Output, QueryList, ViewChildren} from '@angular/core';
import {Observable} from 'rxjs';
import { Store} from '@ngrx/store';
import {
  selectActionDurezas,
  selectActionDurezasEdit,
  selectListDurezas, selectListDurezasFiltro,
  selectLoadingDurezas
} from '../../state/parametros-durezas.selectors';
import {Durezas} from '../../../../../data/models/durezas';
import {NgbdSortableHeader, SortEvent} from '../../../../../shared/directives/sort.directive';
import {AppState} from '../../../../../app.state';
import {paginatorParametrosDurezas, sortParametrosDurezas} from '../../state/parametros-durezas.actions';
@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {
  @Output() edit = new EventEmitter<Durezas>();
  @Output() delete = new EventEmitter<Durezas>();
  durezas$: Observable<Durezas[]> = new Observable();
  durezasAux$: Observable<Durezas[]> = new Observable();
  loading$: Observable<boolean> = new Observable();
  action$: Observable<boolean> = new Observable();
  durezaEdit$: Durezas = new Durezas();

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;// sort

  constructor(
    private store: Store<AppState>,
  ) { }

  ngOnInit(): void {
    this.durezas$ = this.store.select(selectListDurezas);// listado de la tabla
    this.durezasAux$ = this.store.select(selectListDurezasFiltro);// listado de la tabla
    this.loading$ = this.store.select(selectLoadingDurezas);// cargue true o false
    this.action$ = this.store.select(selectActionDurezas);// acciones true o false
    // acciones edit personal
    this.store.select(selectActionDurezasEdit).subscribe(x => {this.durezaEdit$ = x;});
  }

  _edit(Durezas: Durezas) {
    this.edit.emit(Durezas);
  }

  _delete(Durezas: Durezas) {
    this.delete.emit(Durezas);
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
      // this.Durezas$ = this.DurezasAux$;
    } else {
      this.store.dispatch(sortParametrosDurezas({column, direction}));
    }
  }

  onItemsPaginado(paginator) {
    this.store.dispatch(paginatorParametrosDurezas({paginator}));
  }
}
