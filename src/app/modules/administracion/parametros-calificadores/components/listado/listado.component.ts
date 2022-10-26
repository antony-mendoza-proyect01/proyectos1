import {Component, EventEmitter,  OnInit, Output, QueryList, ViewChildren} from '@angular/core';
import {Observable} from 'rxjs';
import { Store} from '@ngrx/store';
import {
  selectActionCalificadores,
  selectActionCalificadoresEdit,
  selectListCalificadores, selectListCalificadoresFiltro,
  selectLoadingCalificadores
} from '../../state/parametros-calificadores.selectors';
import {Calificadores} from '../../../../../data/models/calificadores';
import {NgbdSortableHeader, SortEvent} from '../../../../../shared/directives/sort.directive';
import {AppState} from '../../../../../app.state';
import {paginatorParametrosCalificadores, sortParametrosCalificadores} from '../../state/parametros-calificadores.actions';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {
  @Output() edit = new EventEmitter<Calificadores>();
  @Output() delete = new EventEmitter<Calificadores>();
  calificadores$: Observable<Calificadores[]> = new Observable();
  calificadoresAux$: Observable<Calificadores[]> = new Observable();
  loading$: Observable<boolean> = new Observable();
  action$: Observable<boolean> = new Observable();
  calificadorEdit$: Calificadores = new Calificadores();

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;// sort

  constructor(
    private store: Store<AppState>,
  ) { }

  ngOnInit(): void {
    this.calificadores$ = this.store.select(selectListCalificadores);// listado de la tabla
    this.calificadoresAux$ = this.store.select(selectListCalificadoresFiltro);// listado de la tabla
    this.loading$ = this.store.select(selectLoadingCalificadores);// cargue true o false
    this.action$ = this.store.select(selectActionCalificadores);// acciones true o false
    // acciones edit personal
    this.store.select(selectActionCalificadoresEdit).subscribe(x => {this.calificadorEdit$ = x;});
  }

  _edit(Calificadores: Calificadores) {
    this.edit.emit(Calificadores);
  }

  _delete(Calificadores: Calificadores) {
    this.delete.emit(Calificadores);
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
      this.store.dispatch(sortParametrosCalificadores({column, direction}));
    }
  }

  onItemsPaginado(paginator) {
    this.store.dispatch(paginatorParametrosCalificadores({paginator}));
  }
}
