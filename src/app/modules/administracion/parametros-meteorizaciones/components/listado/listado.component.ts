import {Component, EventEmitter,  OnInit, Output, QueryList, ViewChildren} from '@angular/core';
import {Observable} from 'rxjs';
import { Store} from '@ngrx/store';
import {
  selectActionMeteorizaciones,
  selectActionMeteorizacionesEdit,
  selectListMeteorizaciones, selectListMeteorizacionesFiltro,
  selectLoadingMeteorizaciones
} from '../../state/parametros-meteorizaciones.selectors';
import {NgbdSortableHeader, SortEvent} from '../../../../../shared/directives/sort.directive';
import {AppState} from '../../../../../app.state';
import {paginatorParametrosMeteorizaciones, sortParametrosMeteorizaciones} from '../../state/parametros-meteorizaciones.actions';
import {Meteorizaciones} from "../../../../../data/models/meterorizaciones";
@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {
  @Output() edit = new EventEmitter<Meteorizaciones>();
  @Output() delete = new EventEmitter<Meteorizaciones>();
  meteorizaciones$: Observable<Meteorizaciones[]> = new Observable();
  meteorizacionesAux$: Observable<Meteorizaciones[]> = new Observable();
  loading$: Observable<boolean> = new Observable();
  action$: Observable<boolean> = new Observable();
  meteorizacionEdit$: Meteorizaciones = new Meteorizaciones();

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;// sort

  constructor(
    private store: Store<AppState>,
  ) { }

  ngOnInit(): void {
    this.meteorizaciones$ = this.store.select(selectListMeteorizaciones);// listado de la tabla
    this.meteorizacionesAux$ = this.store.select(selectListMeteorizacionesFiltro);// listado de la tabla
    this.loading$ = this.store.select(selectLoadingMeteorizaciones);// cargue true o false
    this.action$ = this.store.select(selectActionMeteorizaciones);// acciones true o false
    // acciones edit personal
    this.store.select(selectActionMeteorizacionesEdit).subscribe(x => {this.meteorizacionEdit$ = x;});
  }

  _edit(Meteorizaciones: Meteorizaciones) {
    this.edit.emit(Meteorizaciones);
  }

  _delete(Meteorizaciones: Meteorizaciones) {
    this.delete.emit(Meteorizaciones);
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
      // this.Meteorizaciones$ = this.MeteorizacionesAux$;
    } else {
      this.store.dispatch(sortParametrosMeteorizaciones({column, direction}));
    }
  }

  onItemsPaginado(paginator) {
    this.store.dispatch(paginatorParametrosMeteorizaciones({paginator}));
  }
}
