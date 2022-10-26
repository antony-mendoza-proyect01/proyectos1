import {Component, EventEmitter,  OnInit, Output, QueryList, ViewChildren} from '@angular/core';
import {Observable} from 'rxjs';
import { Store} from '@ngrx/store';
import {
  selectActionColores,
  selectActionColoresEdit,
  selectListColores, selectListColoresFiltro,
  selectLoadingColores
} from '../../state/parametros-colores.selectors';
import {Colores} from '../../../../../data/models/colores';
import {NgbdSortableHeader, SortEvent} from '../../../../../shared/directives/sort.directive';
import {AppState} from '../../../../../app.state';
import {paginatorParametrosColores, sortParametrosColores} from '../../state/parametros-colores.actions';
@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {
  @Output() edit = new EventEmitter<Colores>();
  @Output() delete = new EventEmitter<Colores>();
  colores$: Observable<Colores[]> = new Observable();
  coloresAux$: Observable<Colores[]> = new Observable();
  loading$: Observable<boolean> = new Observable();
  action$: Observable<boolean> = new Observable();
  colorEdit$: Colores = new Colores();

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;// sort

  constructor(
    private store: Store<AppState>,
  ) { }

  ngOnInit(): void {
    this.colores$ = this.store.select(selectListColores);// listado de la tabla
    this.coloresAux$ = this.store.select(selectListColoresFiltro);// listado de la tabla
    this.loading$ = this.store.select(selectLoadingColores);// cargue true o false
    this.action$ = this.store.select(selectActionColores);// acciones true o false
    // acciones edit personal
    this.store.select(selectActionColoresEdit).subscribe(x => {this.colorEdit$ = x;});
  }

  _edit(Colores: Colores) {
    this.edit.emit(Colores);
  }

  _delete(Colores: Colores) {
    this.delete.emit(Colores);
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
      // this.Colores$ = this.ColoresAux$;
    } else {
      this.store.dispatch(sortParametrosColores({column, direction}));
    }
  }

  onItemsPaginado(paginator) {
    this.store.dispatch(paginatorParametrosColores({paginator}));
  }
}
