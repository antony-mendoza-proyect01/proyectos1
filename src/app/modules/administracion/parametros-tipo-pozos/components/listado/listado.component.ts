import {Component, EventEmitter,  OnInit, Output, QueryList, ViewChildren} from '@angular/core';
import {Observable} from 'rxjs';
import { Store} from '@ngrx/store';
import {
  selectActionTipopozos,
  selectActionTipopozosEdit,
  selectListTipopozos, selectListTipopozosFiltro,
  selectLoadingTipopozos
} from '../../state/parametros-tipo-pozos.selectors';
import {TipoPozos} from '../../../../../data/models/tipo-pozos';
import {NgbdSortableHeader, SortEvent} from '../../../../../shared/directives/sort.directive';
import {AppState} from '../../../../../app.state';
import {paginatorParametrosTipopozos, sortParametrosTipopozos} from '../../state/parametros-tipo-pozos.actions';
@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {
  @Output() edit = new EventEmitter<TipoPozos>();
  @Output() delete = new EventEmitter<TipoPozos>();
  tipopozos$: Observable<TipoPozos[]> = new Observable();
  tipopozosAux$: Observable<TipoPozos[]> = new Observable();
  loading$: Observable<boolean> = new Observable();
  action$: Observable<boolean> = new Observable();
  tipopozoEdit$: TipoPozos = new TipoPozos();

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;// sort

  constructor(
    private store: Store<AppState>,
  ) { }

  ngOnInit(): void {
    this.tipopozos$ = this.store.select(selectListTipopozos);// listado de la tabla
    this.tipopozosAux$ = this.store.select(selectListTipopozosFiltro);// listado de la tabla
    this.loading$ = this.store.select(selectLoadingTipopozos);// cargue true o false
    this.action$ = this.store.select(selectActionTipopozos);// acciones true o false
    // acciones edit personal
    this.store.select(selectActionTipopozosEdit).subscribe(x => {this.tipopozoEdit$ = x;});
  }

  _edit(Tipopozos: TipoPozos) {
    this.edit.emit(Tipopozos);
  }

  _delete(Tipopozos: TipoPozos) {
    this.delete.emit(Tipopozos);
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
      // this.TipoPozos$ = this.TipopozosAux$;
    } else {
      this.store.dispatch(sortParametrosTipopozos({column, direction}));
    }
  }

  onItemsPaginado(paginator) {
    this.store.dispatch(paginatorParametrosTipopozos({paginator}));
  }
}
