import {Component, EventEmitter,  OnInit, Output, QueryList, ViewChildren} from '@angular/core';
import {Observable} from 'rxjs';
import { Store} from '@ngrx/store';
import {
  selectActionTurnos,
  selectActionTurnosEdit,
  selectListTurnos, selectListTurnosFiltro,
  selectLoadingTurnos
} from '../../state/parametros-turnos.selectors';
import {Turnos} from '../../../../../data/models/turnos';
import {NgbdSortableHeader, SortEvent} from '../../../../../shared/directives/sort.directive';
import {AppState} from '../../../../../app.state';
import {paginatorParametrosTurnos, sortParametrosTurnos} from '../../state/parametros-turnos.actions';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {
  @Output() edit = new EventEmitter<Turnos>();
  @Output() delete = new EventEmitter<Turnos>();
  turnos$: Observable<Turnos[]> = new Observable();
  turnosAux$: Observable<Turnos[]> = new Observable();
  loading$: Observable<boolean> = new Observable();
  action$: Observable<boolean> = new Observable();
  turnoEdit$: Turnos = new Turnos();

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;// sort

  constructor(
    private store: Store<AppState>,
  ) { }

  ngOnInit(): void {
    this.turnos$ = this.store.select(selectListTurnos);// listado de la tabla
    this.turnosAux$ = this.store.select(selectListTurnosFiltro);// listado de la tabla
    this.loading$ = this.store.select(selectLoadingTurnos);// cargue true o false
    this.action$ = this.store.select(selectActionTurnos);// acciones true o false
    // acciones edit personal
    this.store.select(selectActionTurnosEdit).subscribe(x => {this.turnoEdit$ = x;});
  }

  _edit(Turnos: Turnos) {
    this.edit.emit(Turnos);
  }

  _delete(Turnos: Turnos) {
    this.delete.emit(Turnos);
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
      this.store.dispatch(sortParametrosTurnos({column, direction}));
    }
  }

  onItemsPaginado(paginator) {
    this.store.dispatch(paginatorParametrosTurnos({paginator}));
  }
}
