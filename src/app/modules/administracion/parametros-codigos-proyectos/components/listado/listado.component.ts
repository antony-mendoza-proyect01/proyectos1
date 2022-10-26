import {Component, EventEmitter,  OnInit, Output, QueryList, ViewChildren} from '@angular/core';
import {Observable} from 'rxjs';
import { Store} from '@ngrx/store';
import {
  selectActionCodigosProyectos,
  selectActionCodigosProyectosEdit,
  selectListCodigosProyectos, selectListCodigosProyectosFiltro,
  selectLoadingCodigosProyectos
} from '../../state/parametros-codigos-proyectos.selectors';
import {CodigosProyectos} from '../../../../../data/models/codigos-proyectos';
import {NgbdSortableHeader, SortEvent} from '../../../../../shared/directives/sort.directive';
import {AppState} from '../../../../../app.state';
import {paginatorParametrosCodigosProyectos, sortParametrosCodigosProyectos} from '../../state/parametros-codigos-proyectos.actions';
@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {
  @Output() edit = new EventEmitter<CodigosProyectos>();
  @Output() delete = new EventEmitter<CodigosProyectos>();
  codigosproyectos$: Observable<CodigosProyectos[]> = new Observable();
  codigosproyectosAux$: Observable<CodigosProyectos[]> = new Observable();
  loading$: Observable<boolean> = new Observable();
  action$: Observable<boolean> = new Observable();
  codigoproyectoEdit$: CodigosProyectos = new CodigosProyectos();

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;// sort

  constructor(
    private store: Store<AppState>,
  ) { }

  ngOnInit(): void {
    this.codigosproyectos$ = this.store.select(selectListCodigosProyectos);// listado de la tabla
    this.codigosproyectosAux$ = this.store.select(selectListCodigosProyectosFiltro);// listado de la tabla
    this.loading$ = this.store.select(selectLoadingCodigosProyectos);// cargue true o false
    this.action$ = this.store.select(selectActionCodigosProyectos);// acciones true o false
    // acciones edit personal
    this.store.select(selectActionCodigosProyectosEdit).subscribe(x => {this.codigoproyectoEdit$ = x;});
  }

  _edit(CodigosProyectos: CodigosProyectos) {
    this.edit.emit(CodigosProyectos);
  }

  _delete(CodigosProyectos: CodigosProyectos) {
    this.delete.emit(CodigosProyectos);
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
      // this.CodigosProyectos$ = this.CodigosProyectosAux$;
    } else {
      this.store.dispatch(sortParametrosCodigosProyectos({column, direction}));
    }
  }

  onItemsPaginado(paginator) {
    this.store.dispatch(paginatorParametrosCodigosProyectos({paginator}));
  }
}
