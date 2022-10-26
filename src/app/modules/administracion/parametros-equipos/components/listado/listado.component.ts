import {Component, EventEmitter,  OnInit, Output, QueryList, ViewChildren} from '@angular/core';
import {Observable} from 'rxjs';
import { Store} from '@ngrx/store';
import {
  selectActionEquipos,
  selectActionEquiposEdit,
  selectListEquipos, selectListEquiposFiltro,
  selectLoadingEquipos
} from '../../state/parametros-equipos.selectors';
import {Equipos} from '../../../../../data/models/equipos';
import {NgbdSortableHeader, SortEvent} from '../../../../../shared/directives/sort.directive';
import {AppState} from '../../../../../app.state';
import {paginatorParametrosEquipos, sortParametrosEquipos} from '../../state/parametros-equipos.actions';


@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {
  @Output() edit = new EventEmitter<Equipos>();
  @Output() delete = new EventEmitter<Equipos>();
  equipos$: Observable<Equipos[]> = new Observable();
  equiposAux$: Observable<Equipos[]> = new Observable();
  loading$: Observable<boolean> = new Observable();
  action$: Observable<boolean> = new Observable();
  equipoEdit$: Equipos = new Equipos();

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;// sort

  constructor(
    private store: Store<AppState>,
  ) { }

  ngOnInit(): void {
    this.equipos$ = this.store.select(selectListEquipos);// listado de la tabla
    this.equiposAux$ = this.store.select(selectListEquiposFiltro);// listado de la tabla
    this.loading$ = this.store.select(selectLoadingEquipos);// cargue true o false
    this.action$ = this.store.select(selectActionEquipos);// acciones true o false
    // acciones edit personal
    this.store.select(selectActionEquiposEdit).subscribe(x => {this.equipoEdit$ = x;});
  }

  _edit(Equipos: Equipos) {
    this.edit.emit(Equipos);
  }

  _delete(Equipos: Equipos) {
    this.delete.emit(Equipos);
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
      this.store.dispatch(sortParametrosEquipos({column, direction}));
    }
  }

  onItemsPaginado(paginator) {
    this.store.dispatch(paginatorParametrosEquipos({paginator}));
  }
}
