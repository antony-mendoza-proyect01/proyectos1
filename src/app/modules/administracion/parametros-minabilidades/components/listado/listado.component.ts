import {Component, EventEmitter,  OnInit, Output, QueryList, ViewChildren} from '@angular/core';
import {Observable} from 'rxjs';
import { Store} from '@ngrx/store';
import {
  selectActionMinabilidades,
  selectActionMinabilidadesEdit,
  selectListMinabilidades, selectListMinabilidadesFiltro,
  selectLoadingMinabilidades
} from '../../state/parametros-minabilidaes.selectors';
import {Minabilidades} from '../../../../../data/models/minabilidades';
import {NgbdSortableHeader, SortEvent} from '../../../../../shared/directives/sort.directive';
import {AppState} from '../../../../../app.state';
import {paginatorParametrosMinabilidades, sortParametrosMinabilidades} from '../../state/parametros-minabilidaes.actions';
@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {
  @Output() edit = new EventEmitter<Minabilidades>();
  @Output() delete = new EventEmitter<Minabilidades>();
  minabilidades$: Observable<Minabilidades[]> = new Observable();
  minabilidadesAux$: Observable<Minabilidades[]> = new Observable();
  loading$: Observable<boolean> = new Observable();
  action$: Observable<boolean> = new Observable();
  minabilidadEdit$: Minabilidades = new Minabilidades();

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;// sort

  constructor(
    private store: Store<AppState>,
  ) { }

  ngOnInit(): void {
    this.minabilidades$ = this.store.select(selectListMinabilidades);// listado de la tabla
    this.minabilidadesAux$ = this.store.select(selectListMinabilidadesFiltro);// listado de la tabla
    this.loading$ = this.store.select(selectLoadingMinabilidades);// cargue true o false
    this.action$ = this.store.select(selectActionMinabilidades);// acciones true o false
    // acciones edit personal
    this.store.select(selectActionMinabilidadesEdit).subscribe(x => {this.minabilidadEdit$ = x;});
  }

  _edit(Minabilidades: Minabilidades) {
    this.edit.emit(Minabilidades);
  }

  _delete(Minabilidades: Minabilidades) {
    this.delete.emit(Minabilidades);
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
      // this.Minabilidades$ = this.MinabilidadesAux$;
    } else {
      this.store.dispatch(sortParametrosMinabilidades({column, direction}));
    }
  }

  onItemsPaginado(paginator) {
    this.store.dispatch(paginatorParametrosMinabilidades({paginator}));
  }
}
