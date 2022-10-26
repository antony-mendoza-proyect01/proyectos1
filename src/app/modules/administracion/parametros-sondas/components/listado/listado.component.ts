import {Component, EventEmitter,  OnInit, Output, QueryList, ViewChildren} from '@angular/core';
import {Observable} from 'rxjs';
import { Store} from '@ngrx/store';
import {
  selectActionSondas,
  selectActionSondasEdit,
  selectListSondas, selectListSondasFiltro,
  selectLoadingSondas
} from '../../state/parametros-sondas.selectors';

import {NgbdSortableHeader, SortEvent} from '../../../../../shared/directives/sort.directive';
import {AppState} from '../../../../../app.state';
import {paginatorParametrosSondas, sortParametrosSondas} from '../../state/parametros-sondas.actions';
import { Sondas } from 'src/app/data/models/sondas';
@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {
  @Output() edit = new EventEmitter<Sondas>();
  @Output() delete = new EventEmitter<Sondas>();
  sondas$: Observable<Sondas[]> = new Observable();
  sondasAux$: Observable<Sondas[]> = new Observable();
  loading$: Observable<boolean> = new Observable();
  action$: Observable<boolean> = new Observable();
  sondaEdit$: Sondas = new Sondas();

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;// sort

  constructor(
    private store: Store<AppState>,
  ) { }

  ngOnInit(): void {
    this.sondas$ = this.store.select(selectListSondas);// listado de la tabla
    this.sondasAux$ = this.store.select(selectListSondasFiltro);// listado de la tabla
    this.loading$ = this.store.select(selectLoadingSondas);// cargue true o false
    this.action$ = this.store.select(selectActionSondas);// acciones true o false
    // acciones edit personal
    this.store.select(selectActionSondasEdit).subscribe(x => {this.sondaEdit$ = x;});
  }

  _edit(Sondas: Sondas) {
    this.edit.emit(Sondas);
  }

  _delete(Sondas: Sondas) {
    this.delete.emit(Sondas);
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
      // this.Sondas$ = this.SondasAux$;
    } else {
      this.store.dispatch(sortParametrosSondas({column, direction}));
    }
  }

  onItemsPaginado(paginator) {
    this.store.dispatch(paginatorParametrosSondas({paginator}));
  }
}
