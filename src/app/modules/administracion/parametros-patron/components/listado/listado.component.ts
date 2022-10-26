import {Component, EventEmitter,  OnInit, Output, QueryList, ViewChildren} from '@angular/core';
import {Observable} from 'rxjs';
import { Store} from '@ngrx/store';
import {
  selectActionPatron,
  selectActionPatronEdit,
  selectListPatron, selectListPatronFiltro,
  selectLoadingPatron
} from '../../state/parametros-patron.selectors';
import {Patron} from '../../../../../data/models/patron';
import {NgbdSortableHeader, SortEvent} from '../../../../../shared/directives/sort.directive';
import {AppState} from '../../../../../app.state';
import {paginatorParametrosPatron, sortParametrosPatron} from '../../state/parametros-patron.actions';
@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {
  @Output() edit = new EventEmitter<Patron>();
  @Output() delete = new EventEmitter<Patron>();
  patrones$: Observable<Patron[]> = new Observable();
  patronesAux$: Observable<Patron[]> = new Observable();
  loading$: Observable<boolean> = new Observable();
  action$: Observable<boolean> = new Observable();
  patronEdit$: Patron = new Patron();

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;// sort

  constructor(
    private store: Store<AppState>,
  ) { }

  ngOnInit(): void {
    this.patrones$ = this.store.select(selectListPatron);// listado de la tabla
    this.patronesAux$ = this.store.select(selectListPatronFiltro);// listado de la tabla
    this.loading$ = this.store.select(selectLoadingPatron);// cargue true o false
    this.action$ = this.store.select(selectActionPatron);// acciones true o false
    // acciones edit personal
    this.store.select(selectActionPatronEdit).subscribe(x => {this.patronEdit$ = x;});
  }

  _edit(Patron: Patron) {
    this.edit.emit(Patron);
  }

  _delete(Patron: Patron) {
    this.delete.emit(Patron);
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
      // this.Patron$ = this.PatronAux$;
    } else {
      this.store.dispatch(sortParametrosPatron({column, direction}));
    }
  }

  onItemsPaginado(paginator) {
    this.store.dispatch(paginatorParametrosPatron({paginator}));
  }
}
