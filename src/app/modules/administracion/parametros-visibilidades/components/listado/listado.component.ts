import {Component, EventEmitter,  OnInit, Output, QueryList, ViewChildren} from '@angular/core';
import {Observable} from 'rxjs';
import { Store} from '@ngrx/store';
import {
  selectActionVisibilidades,
  selectActionVisibilidadesEdit,
  selectListVisibilidades, selectListVisibilidadesFiltro,
  selectLoadingVisibilidades
} from '../../state/parametros-visibilidades.selectors';
import {Visibilidades} from '../../../../../data/models/visibilidades';
import {NgbdSortableHeader, SortEvent} from '../../../../../shared/directives/sort.directive';
import {AppState} from '../../../../../app.state';
import {paginatorParametrosVisibilidades, sortParametrosVisibilidades} from '../../state/parametros-visibilidades.actions';
@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {
  @Output() edit = new EventEmitter<Visibilidades>();
  @Output() delete = new EventEmitter<Visibilidades>();
  visibilidades$: Observable<Visibilidades[]> = new Observable();
  visibilidadesAux$: Observable<Visibilidades[]> = new Observable();
  loading$: Observable<boolean> = new Observable();
  action$: Observable<boolean> = new Observable();
  visibilidadEdit$: Visibilidades = new Visibilidades();

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;// sort

  constructor(
    private store: Store<AppState>,
  ) { }

  ngOnInit(): void {
    this.visibilidades$ = this.store.select(selectListVisibilidades);// listado de la tabla
    this.visibilidadesAux$ = this.store.select(selectListVisibilidadesFiltro);// listado de la tabla
    this.loading$ = this.store.select(selectLoadingVisibilidades);// cargue true o false
    this.action$ = this.store.select(selectActionVisibilidades);// acciones true o false
    // acciones edit personal
    this.store.select(selectActionVisibilidadesEdit).subscribe(x => {this.visibilidadEdit$ = x;});
  }

  _edit(Visibilidades: Visibilidades) {
    this.edit.emit(Visibilidades);
  }

  _delete(Visibilidades: Visibilidades) {
    this.delete.emit(Visibilidades);
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
      // this.Visibilidades$ = this.VisibilidadesAux$;
    } else {
      this.store.dispatch(sortParametrosVisibilidades({column, direction}));
    }
  }

  onItemsPaginado(paginator) {
    this.store.dispatch(paginatorParametrosVisibilidades({paginator}));
  }
}
