import {Component, EventEmitter,  OnInit, Output, QueryList, ViewChildren} from '@angular/core';
import {Observable} from 'rxjs';
import { Store} from '@ngrx/store';
import {
  selectActionDescripcionSedimentaria,
  selectActionDescripcionSedimentariaEdit,
  selectListDescipcionSedimentaria, selectListDescripcionSedimentariaFiltro,
  selectLoadingDescipcionSedimentaria
} from '../../state/parametros-descripcion-sedimentaria.selectors';
import {NgbdSortableHeader, SortEvent} from '../../../../../shared/directives/sort.directive';
import {AppState} from '../../../../../app.state';
import {paginatorParametrosDescripcionSedimentaria, sortParametrosDescripcionSedimentaria} from '../../state/parametros-descripcion-sedimentaria.actions';
import { DescripcionSedimentaria } from 'src/app/data/models/descripcion-sedimentaria';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {
  @Output() edit = new EventEmitter<DescripcionSedimentaria>();
  @Output() delete = new EventEmitter<DescripcionSedimentaria>();
  descripcionSedimentarias$: Observable<DescripcionSedimentaria[]> = new Observable();
  descripcionSedimentariasAux$: Observable<DescripcionSedimentaria[]> = new Observable();
  loading$: Observable<boolean> = new Observable();
  action$: Observable<boolean> = new Observable();
  descripcionSedimentariaEdit$: DescripcionSedimentaria = new DescripcionSedimentaria();

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;// sort

  constructor(
    private store: Store<AppState>,
  ) { }

  ngOnInit(): void {
    this.descripcionSedimentarias$ = this.store.select(selectListDescipcionSedimentaria);// listado de la tabla
    this.descripcionSedimentariasAux$ = this.store.select(selectListDescripcionSedimentariaFiltro);// listado de la tabla
    this.loading$ = this.store.select(selectLoadingDescipcionSedimentaria);// cargue true o false
    this.action$ = this.store.select(selectActionDescripcionSedimentaria);// acciones true o false
    // acciones edit personal
    this.store.select(selectActionDescripcionSedimentariaEdit).subscribe(x => {this.descripcionSedimentariaEdit$ = x;});
  }

  _edit(DescripcionSedimentaria: DescripcionSedimentaria) {
    this.edit.emit(DescripcionSedimentaria);
  }

  _delete(DescripcionSedimentaria: DescripcionSedimentaria) {
    this.delete.emit(DescripcionSedimentaria);
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
      this.store.dispatch(sortParametrosDescripcionSedimentaria({column, direction}));
    }
  }

  onItemsPaginado(paginator) {
    this.store.dispatch(paginatorParametrosDescripcionSedimentaria({paginator}));
  }
}
